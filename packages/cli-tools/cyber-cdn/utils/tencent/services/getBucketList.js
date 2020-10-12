

module.exports = async (tencent) => {
  try {
    const BucketList = await new Promise((resolve, reject) => {
      tencent.getService((error, data) => {
        error ? reject(error) : resolve(data.Buckets);
      });
    });
    return BucketList || [];
  } catch (error) {
    throw error;
  };
};
