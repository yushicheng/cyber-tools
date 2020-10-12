const path = require("path");
const NodeCosClass = require("cos-nodejs-sdk-v5");

const getSecret = require("@/utils/secret/getSecret");
const getRecordFiles = require("@/utils/match/getRecordFiles");
const downloadSingle = require("@/utils/tencent/services/downloadSingle");


module.exports = async () => {
  try {
    const secret = await getSecret();
    const tencent = new NodeCosClass(secret);
    const distnations = await getRecordFiles();
    const masterTask = distnations.map(async ({ dist, records }) => {
      try {
        const branchTask = records.map(async ({ fileName, remoteFileKey }) => {
          try {
            const downloadPath = path.resolve(dist, fileName);
            await downloadSingle({ downloadPath, remoteFileKey }, tencent);
          } catch (error) {
            throw error;
          };
        });
        await Promise.all(branchTask);
      } catch (error) {
        throw error;
      };
    });
    await Promise.all(masterTask);
  } catch (error) {
    throw error;
  };
};