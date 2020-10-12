const path = require("path");
const { writeFile } = require("jsonfile");

const getLocalContent = require("@/utils/usually/getLocalContent");

class RecordManage {

  constructor () {
    this.distnations = [];
  };

  // 将上传结果按照目录追加到列表
  appendResultToDist(distName, fileName, uploadResult) {
    const findIndex = this.distnations.findIndex(({ dist }) => dist === distName);
    const appendRecords = { [fileName]: uploadResult };
    if (findIndex === -1) {
      this.distnations.push({
        dist: distName,
        records: appendRecords
      });
    } else {
      const originRecords = this.distnations[findIndex].records;
      this.distnations[findIndex].records = { ...originRecords, ...appendRecords };
    };
  };

  // 将distnation的记录分别写入相应的目录中
  async wirteToEveryDist() {
    // 遍历distnation形成任务序列
    try {
      const writeTask = this.distnations.map(async ({ dist, records }) => {
        try {
          const localContent = await getLocalContent(dist);
          const recordFilePath = path.join(dist, "file.oss.json");
          const assignContent = { ...localContent, ...records };
          await writeFile(recordFilePath, assignContent, { spaces: 2, EOL: "\r\n" });
        } catch (error) {
          throw error;
        };
      });
      await Promise.all(writeTask);
    } catch (error) {
      throw error;
    };
  };

};


exports.recordManage = new RecordManage();

/**
 * distnation设计蓝图
 *
 * this.distnations=[{
 *  dist:"",
 *  records:{
 *    [name]:[result]
 *  }
 * }]
 */