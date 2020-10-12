#!/usr/bin/env node
const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

program
  .usage("aliyun command")
  .version(json.version);

program
  .command("init")
  .description("初始化oss上传配置")
  .action(require("@/actions/initialConfig"));

program
  .command("view")
  .description("查看腾讯云登录信息")
  .action(require("@/actions/viewSecret"));

program
  .command("login")
  .description("登录")
  .action(require("@/actions/login"));

program
  .command("logout")
  .description("登出")
  .action(require("@/actions/logout"));

program
  .command("upload")
  .description("上传到腾讯云oss")
  .action(require("@/actions/upload"));

program
  .command("refresh")
  .description("刷新上传记录")
  .action(require("@/actions/refresh"))

program
  .command("download")
  .description("根据file.oss.json下载文件")
  .action(require("@/actions/download"));

program.parse(process.argv);


