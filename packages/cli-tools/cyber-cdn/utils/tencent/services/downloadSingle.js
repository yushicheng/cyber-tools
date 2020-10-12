const fs = require("fs");
const toast = require("@cyber-tools/cli-utils/toast");
const pathExists = require("path-exists");

const { Region } = require("@/configs/runtime.config");
const generateBucketName = require("@/utils/tencent/utils/generateBucketName");


module.exports = async ({ downloadPath, remoteFileKey }, tencent) => {
  const BucketName = await generateBucketName();
  if (await pathExists(downloadPath)) {
    toast.warn(["文件", downloadPath, "已经存在!"].join(""))
  } else {
    try {
      await new Promise((resolve, reject) => {
        tencent.getObject({
          Bucket: BucketName, Region,
          Key: remoteFileKey,
          Output: fs.createWriteStream(downloadPath)
        }, (error, data) => {
          error ? reject(error) : resolve(data);
        });
      });
      toast.succeed([remoteFileKey, "下载成功!"].join(""));
    } catch (error) {
      toast.fail([remoteFileKey, "下载失败!"].join(""));
      throw error;
    };
  };
};