const fs = require("fs");
const { promisify } = require("es6-promisify");

const upload = require("@/actions/upload");
const matchRecordFiles = require("@/utils/match/matchRecordFiles");

module.exports = async () => {
  try {
    const recordFiles = await matchRecordFiles();
    const deleteTask = recordFiles.map(async (filePath) => {
      try {
        await promisify(fs.unlink)(filePath);
      } catch (error) {
        throw error;
      };
    });
    await Promise.all(deleteTask);
    await upload();
  } catch (error) {
    throw error;
  };
};