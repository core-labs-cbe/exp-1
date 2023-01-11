const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/exp-1/'
  // publicPath: process.env.NODE_ENV === "production" ? "" : "/",
},
)



