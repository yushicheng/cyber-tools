#!/usr/bin/env node
const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

program
  .usage("pdf-split <cmd>")
  .version(json.version);

program
  .command("all")
  .description("将当前目录中所有匹配到的pdf全部进行切分")
  .action(require("@/actions/splite-all"));

program
  .command("single <source>", { isDefault: true })
  .description("将指定的pdf文件按页数分裂")
  .action(require("@/actions/splite-single"));

program.parse(process.argv);


