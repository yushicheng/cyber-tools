
// 配置参考 https://www.npmjs.com/package/mocker-api
module.exports = {
  port: 5000,
  ignore: "**/node_modules/**",
  changeHost: true,
  beforeServer: (app) => {
    /**
     * 返回了express函数执行之后的app对象,
     * 在服务未启动时调用
     * 在该函数内可以增加中间件和app.use
     * */
  }
}