const path = require("path");

const config = {
  projectName: "mp-colorui",
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/": path.resolve(__dirname, "..", "src/"),
    "@types": path.resolve(__dirname, "..", "@types"),
    "mp-colorui": path.resolve(__dirname, "..", "src/index.js")
  },
  date: "2018-10-30",
  designWidth: 750,
  deviceRatio: {
    "640": 2.34 / 2,
    "750": 1,
    "828": 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: {
    babel: {
      sourceMap: true,
      presets: ["env"],
      plugins: [
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-object-rest-spread"
      ]
    }
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        url: {
          enable: true,
          limit: 10240
        }
      }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
};

if (process.env.TARO_BUILD_TYPE === "ui") {
  Object.assign(config.h5, {
    enableSourceMap: false,
    enableExtract: false,
    enableDll: false
  });
  config.h5.webpackChain = chain => {
    chain.plugins.delete("htmlWebpackPlugin");
    chain.plugins.delete("addAssetHtmlWebpackPlugin");
    chain.merge({
      output: {
        path: path.join(process.cwd(), "dist", "h5"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "mp-colorui"
      },
      externals: {
        nervjs: "commonjs2 nervjs",
        classnames: "commonjs2 classnames",
        "@tarojs/components": "commonjs2 @tarojs/components",
        "@tarojs/taro-h5": "commonjs2 @tarojs/taro-h5",
        weui: "commonjs2 weui"
      }
    });
  };
}

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
