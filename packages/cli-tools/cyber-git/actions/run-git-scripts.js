const selectScriptType = require("@/scripts/select/selectScriptType");

module.exports = async () => {
  try {
    const selectAction = await selectScriptType();
    await selectAction();
  } catch (error) {
    throw error;
  };
};