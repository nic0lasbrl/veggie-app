const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  },
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        fiber: require("fibers")
      }
    }
  }
};
