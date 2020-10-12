const path = require("path");

const getFileSign = require("@/utils/usually/getFileSign");
const getUploadFiles = require("@/utils/match/getUploadFiles");
const createTencent = require("@/utils/tencent/createTencent");
const createProgress = require("@/utils/progress/createProgress");
const createBucketByDirectory = require("@/utils/tencent/createBucketByDirectory");
const uploadSingle = require("@/utils/tencent/services/uploadSingle");
const { recordManage } = require("@/utils/record/RecordManage");



module.exports = async () => {
  try {
    const tencent = await createTencent();
    const uploadFiles = await getUploadFiles();
    const Bucket = await createBucketByDirectory(tencent);
    const oProgress = createProgress(uploadFiles.length);
    const masterTask = uploadFiles.map(async (filePath) => {

      const fileSign = await getFileSign(filePath);
      const { name: fileName, dir: distName, ext } = path.parse(filePath);
      const fileKeyName = [fileSign, ext].join("");

      const uploadResult = await uploadSingle({ filePath, fileKeyName, Bucket }, tencent);
      recordManage.appendResultToDist(distName, fileName, uploadResult);
      oProgress.tick({ pathName: filePath });
    });
    await Promise.all(masterTask);
    await recordManage.wirteToEveryDist();
  } catch (error) {
    throw error;
  };
};
