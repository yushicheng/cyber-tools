const createBucket = require("./services/createBucket");
const getBucketList = require("./services/getBucketList");
const generateBucketName = require("./utils/generateBucketName");

module.exports = async (tencent) => {
  try {
    const BucketName = await generateBucketName();
    const BucketList = await getBucketList(tencent);
    const findBucket = BucketList.find(({ Name }) => Name === BucketName);
    if (findBucket) {
      return findBucket.Name;
    } else {
      await createBucket({ BucketName }, tencent);
      return BucketName;
    };
  } catch (error) {
    throw error;
  };
};