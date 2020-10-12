const fs = require("fs");
const ini = require("ini");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@cyber-tools/cli-utils/toast");
const popConfirm = require("@cyber-tools/cli-utils/popConfirm");

const createNpmrc = require("@/scripts/create-npmrc");
const hasNpmrcFile = require("@/utils/hasNpmrcFile");
const selectNpmConfig = require("@/utils/select-npm-config");


module.exports = async function appendConfigAction() {
  if (await hasNpmrcFile()) {
    try {
      const npmrcFilePath = path.join(process.cwd(), ".npmrc");
      const npmrcConfigText = await promisify(fs.readFile)(npmrcFilePath, { encoding: "utf-8" });
      const npmrcConfigObject = ini.parse(npmrcConfigText);
      const appendConfig = await selectNpmConfig();
      const assignConfig = Object.assign({}, npmrcConfigObject, appendConfig);
      await promisify(fs.writeFile)(npmrcFilePath, ini.stringify(assignConfig));
      toast.succeed("追加成功!");
    } catch (error) {
      toast.succeed("追加失败!");
      throw error;
    };
  } else {
    if (await popConfirm("当前项目不存在.npmrc文件,是否创建?")) {
      await createNpmrc();
      await appendConfigAction();
    } else {
      toast.succeed("complate!");
    };
  };
};