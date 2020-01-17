module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    publicPath: "/mp-colorui-h5-demo/",
    router: {
      basename: "/mp-colorui-h5-demo/"
    },
    webpackChain(chain) {
      chain.performance.set("hints", false);
    },
    esnextModules: ["mp-colorui"]
  }
};
