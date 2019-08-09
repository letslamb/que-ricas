// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config
        .target('node')
        .externals([
        nodeExternals({
          whitelist: [/^vuetify/, 'material-design-icons-iconfont/dist/material-design-icons.css']
        })
      ])
    }
    // config
    //   .plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])  
  })


  api.loadSource(store  => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  })
}
