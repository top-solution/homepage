# Top Solution homepage - deploy stuff

Pulumi handles the creation of the IAM User used to deploy everything. It currently does not handle the actual infrastructure.

If you need to tweak the IAM policies or see the generated credentials, you can run [Pulumi](https://www.pulumi.com/) with:
```bash
AWS_PROFILE=some-aws-profile pulumi up -s website-dev # or -prod
```

Remember to export the AWS_REGION to match with the stack region (`eu-west-1`, forced by the region of the `topsolution` bucket)
