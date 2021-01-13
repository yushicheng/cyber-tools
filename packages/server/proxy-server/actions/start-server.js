const cors = require("cors");
const express = require("express");
const apiMocker = require("mocker-api");

const get_config_file = require("@/utils/get_config_file");

module.exports = async () => {
  const { port, proxy } = await get_config_file();
  const app = express();
  app.use(cors());
  apiMocker(app, {}, { proxy });
  app.listen(port, () => {
    console.log("代理服务器启动完成", "port", port);
  });
};