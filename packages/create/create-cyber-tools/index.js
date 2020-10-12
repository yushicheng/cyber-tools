#!/usr/bin/env node
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const createTools = require("@/scripts/create-tools");
const selectTemplate = require("@/utils/selectTemplate");

(async () => {
  try {
    const { remote, devDependencies } = await selectTemplate();
    await createTools({ remote, devDependencies });
  } catch (error) {
    throw error;
  };
})();

