import Mock from "mockjs";
const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|100": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      user: "@cname",
      time: "@date",
      email: "@email"
    }
  ]
});
export default data;
