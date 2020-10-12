#!/usr/bin/env node
const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");


program
  .usage("cyber-npm <cmd>")
  .version(json.version);

program
  .command("open")
  .description("打开当前包所在的npm页面")
  .action(require("@/actions/launch-npm"))

program
  .command("publish")
  .description("发布当前包")
  .action(require("@/actions/publish-it"))

program
  .command("script", { isDefault: true })
  .description("运行相应的npm脚本")
  .action(require("@/actions/select-script"));

program.parse(process.argv);


