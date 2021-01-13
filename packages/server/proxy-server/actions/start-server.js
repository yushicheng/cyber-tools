const cors = require("cors");
const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');

const get_config_file = require("@/utils/get_config_file");

module.exports = async () => {
  const { port, proxy } = await get_config_file();
  const app = express();
  app.use(cors());
  Object.keys(proxy).forEach((proxy_url) => {
    app.use(proxy_url, createProxyMiddleware(proxy[proxy_url]))
  });
  app.listen(port, () => {
    console.log("代理服务器启动完成", "port", port);
  });
};