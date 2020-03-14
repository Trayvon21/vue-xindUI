<template>
  <div>
    <h2>趋势组件</h2>
    <div>趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外</div>
    <h3>正常</h3>
    <div class="flex xindTrend-group">
      <xindTrend>
        <div slot="text">营业额</div>5%
      </xindTrend>
      <xindTrend type="down">
        <div slot="text">个人业绩</div>5%
      </xindTrend>
    </div>
    <h3>颜色反转</h3>
    <div class="flex xindTrend-group">
      <xindTrend reverseColor>
        <div slot="text">销售量</div>5%
      </xindTrend>
      <xindTrend type="down" reverseColor>
        <div slot="text">成本</div>5%
      </xindTrend>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendView",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
  border-bottom: 1px dotted gray;
}
.xindTrend-group {
  width: 800px;
  margin: 10px auto;
  > div {
    margin-right: 20px;
  }
}
</style>
