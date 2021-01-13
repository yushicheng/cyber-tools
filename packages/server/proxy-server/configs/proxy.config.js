

module.exports = {
  port: 9000,

  proxy: {
    "/api": {
      target: "http://test.yi-you.org/",
      changeOrigin: true
    }
  }

};