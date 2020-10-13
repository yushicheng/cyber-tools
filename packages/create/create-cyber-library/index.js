require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const createLibrary = require("@/scripts/create-library");
const selectTemplate = require("@/utils/selectTemplate");

(async () => {
  try {
    const { remote, devDependencies } = await selectTemplate();
    await createLibrary({ remote, devDependencies });
  } catch (error) {
    throw error;
  };
})();

