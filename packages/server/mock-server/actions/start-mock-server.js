const cors = require("cors");
const chokidar = require("chokidar");
const express = require("express");
const apiMocker = require("mocker-api");
const getMockApi = require("@/utils/getMockApi");
const getServerConfig = require("@/utils/getServerConfig");


module.exports = async () => {
  let server;
  async function startServer() {
    const mockApi = await getMockApi();
    const { port, ...otherMockApi } = await getServerConfig();
    const app = express();
    app.use(cors());
    apiMocker(app, { ...mockApi, ...otherMockApi });
    return app.listen(port, () => {
      console.log("mock服务已启动", "监听端口:", port);
    });
  };
  server = await startServer();
  const changeListner = chokidar.watch(process.cwd()).on("change", async () => {
    server.close();
    server = await startServer();
  });
  const unlinkListner = chokidar.watch(process.cwd()).on("unlink", async () => {
    server.close();
    server = await startServer();
  });
  process.on("SIGINT", async () => {
    await changeListner.close();
    await unlinkListner.close();
    process.exit(0);
  });
  process.on("SIGTERM", async () => {
    await changeListner.close();
    await unlinkListner.close();
    process.exit(0);
  });
}