const express = require("express");
const apiMocker = require("mocker-api");
const getMockApi = require("@/utils/getMockApi");
const getServerConfig = require("@/utils/getServerConfig");

module.exports = async () => {
  const mockApi = await getMockApi();
  const { port, ...otherAttr } = await getServerConfig();
  const app = express();
  apiMocker(app, { ...mockApi, ...otherAttr });
  app.listen(port, () => {
    console.log("mock服务已启动", "监听端口:", port);
  });
}