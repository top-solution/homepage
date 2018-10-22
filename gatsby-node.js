const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}


// console.log('##################################')
// console.log(path.join(__dirname, 'src'))

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
  })
  
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-visibility-sensor/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}