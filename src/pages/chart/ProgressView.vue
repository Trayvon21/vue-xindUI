<template>
  <div>
    <h2>进度条</h2>
    <xProgress style="width:500px"  textInside :percentage="55" />
    <xProgress style="width:500px" color='red' :percentage="55" />
    <xProgress style="width:500px" textInside  :strokeWidth="30" :percentage="55" />
    <xProgress style="width:500px" :percentage="55" />
    <xProgress style="width:500px" isAnimate :percentage="55" />
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
