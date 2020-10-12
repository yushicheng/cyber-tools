#!/usr/bin/env node
const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

const clearDNS = require("@/scripts/clearDNS");

program
  .usage("dns-server <cmd>")
  .version(json.version);

program
  .command("start [configFilePath]", { isDefault: true })
  .description("启动dns服务")
  .action(require("@/actions/startServer"));

program
  .command("reset")
  .description("创建dns配置的json文件")
  .action(require("@/scripts/clearDNS"));

program
  .command("init")
  .description("创建dns配置的json文件")
  .action(require("@/actions/createConfig"));

program.parse(process.argv);

process.on("SIGINT", async () => {
  await clearDNS();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await clearDNS();
  process.exit(0);
});

