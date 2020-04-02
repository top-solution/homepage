import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

const stackConfig = new pulumi.Config("static-website");
const config = {
  bucket: 'topsolution',
  bucketPath: stackConfig.require("bucketPath"),
};

const user = new aws.iam.User(`${pulumi.getProject()}-deploy-user-${pulumi.getStack()}`);
const userAccessKey = new aws.iam.AccessKey("deployKey", { user: user.name });
const userPolicy = new aws.iam.UserPolicy("deployPolicy", {
  user: user.name,
  policy: {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "cloudfront:CreateInvalidation",
        Effect: "Allow",
        Resource: "*"
      },
      {
        Sid: "AllowListingOfHomepageFiles",
        Action: ["s3:ListBucket"],
        Effect: "Allow",
        Resource: [`arn:aws:s3:::${config.bucket}`],
        //Condition: { StringLike: { "s3:prefix": ["", config.bucketPath] } }
      },
      {
        Sid: "AllowAllActionsInHomepagePath",
        Effect: "Allow",
        Action: ["s3:PutObject",
          "s3:GetObjectAcl",
          "s3:GetObject",
          "s3:ListObjects",
          "s3:DeleteObject",
          "s3:PutObjectAcl"],
        Resource: [`arn:aws:s3:::${config.bucket}/${config.bucketPath}/*`]
      },
    ],
  },
});

export const contentBucketUri = `s3://${config.bucket}/${config.bucketPath}`;
export const deployUserAccessKey = userAccessKey.id
export const deployUserSecretKey = userAccessKey.secret
