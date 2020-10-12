const createNormalMessage = require("@cyber-tools/comment-utils/createNormalMessage");

module.exports = {
  "临时提交": async () => await createNormalMessage({
    type: "temp",
    title: "临时节点标记"
  }),
  "简单描述": async () => await createNormalMessage({
    type: "description",
    title: "简单描述"
  }),
  "重构功能": async () => await createNormalMessage({
    type: "refactor",
    title: "重构功能"
  }),
  "新功能": async () => await createNormalMessage({
    type: "feat",
    title: "开发新功能"
  }),
  "修复bug": async () => await createNormalMessage({
    type: "fix",
    title: "修复存在问题"
  }),
  "文档改变": async () => await createNormalMessage({
    type: "docs",
    title: "变更文档内容"
  }),
  "撤销commit": async () => await createNormalMessage({
    type: "revert",
    title: "回滚提交"
  }),
  "增加测试代码": async () => await createNormalMessage({
    type: "test",
    title: "新增测试代码"
  })
};