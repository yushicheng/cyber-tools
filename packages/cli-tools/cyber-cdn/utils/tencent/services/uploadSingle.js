const fs = require("fs");
const { Region, StorageClass } = require("@/configs/runtime.config");

module.exports = async ({ filePath, fileKeyName, Bucket }, tencent) => {
  try {
    const { Location } = await new Promise((resolve, reject) => {
      tencent.putObject({
        Bucket, Region, StorageClass,
        Key: fileKeyName,
        Body: fs.createReadStream(filePath)
      }, (error, data) => {
        error ? reject(error) : resolve(data);
      });
    });
    return `https://${Location}`;
  } catch (error) {
    throw error;
  };
};