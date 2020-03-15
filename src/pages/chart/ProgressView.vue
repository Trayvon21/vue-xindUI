<template>
  <div style="margin:20px">
    <h2>进度条</h2>
    <h3>默认进度条</h3>
    <xProgress style="width:500px" :percentage="55" />
    <h3>文字内部显示</h3>
    <xProgress style="width:500px" textInside :percentage="55" />
    <h3>更换进度条颜色</h3>
    <xProgress style="width:500px" color="red" :percentage="55" />
    <h3>内部显示并改变宽度</h3>
    <xProgress style="width:500px" textInside :strokeWidth="30" :percentage="55" />
    <h3>显示入场动画</h3>
    <xProgress style="width:500px" isAnimate :percentage="55" />
    <h3>控制动画显示时间</h3>
    <xProgress style="width:500px" isAnimate :duration="10"  :percentage="55" />
  </div>
</template>

<script>
export default {
  name: "ProgressView",
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
</style>
