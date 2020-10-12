const { Region, ACL } = require("@/configs/runtime.config");


module.exports = async ({ BucketName }, tencent) => {
  try {
    await new Promise((resolve, reject) => {
      tencent.putBucket({ Region, Bucket: BucketName, ACL }, (error, data) => {
        error ? reject(error) : resolve(data);
      });
    });
  } catch (error) {
    throw error;
  };
};