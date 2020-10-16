const getServerConfig = require("@/utils/getServerConfig");

module.exports = async (app) => {
  const { beforeServer } = await getServerConfig();
  if (beforeServer instanceof Array) {
    beforeServer.forEach((currentMiddleWare) => {
      app.use(currentMiddleWare);
    });
  };
  if (beforeServer instanceof Function) {
    await beforeServer(app);
  };
}