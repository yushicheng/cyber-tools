#!/usr/bin/env node
const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");

program
  .name("cyber-component")
  .usage("cyber-component <command>")
  .version(json.version);

program
  .command("dev")
  .description("编译source文件夹的")
  .action(require("@/actions/devWatch"));

program
  .command("build")
  .description("编译source文件夹的")
  .action(require("@/actions/build"));

program.parse(process.argv);


