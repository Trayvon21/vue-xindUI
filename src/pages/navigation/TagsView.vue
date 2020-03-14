<template>
  <div>
    <h2>单行标签</h2>
    <x-tags :tagsData="tagsData1" />
    <h2>多行标签</h2>
    <xSelectTags :tagsData="tagsData2" style="width:800px" />
  </div>
</template>

<script>
export default {
  name: "TagsView",
  props: {},
  data() {
    return {
      tagsData1: [],
      tagsData2: []
    };
  },
  computed: {},
  created() {
    this.tagsData1 = this.tagsData(3);
    this.tagsData2 = this.tagsData(20);
  },
  mounted() {},
  watch: {},
  methods: {
    tagsData(n) {
      let arr = [];
      for (let i = 1; i <= n; i++) {
        arr.push({ name: `标签${i}` });
      }
      console.log(arr);
      return arr;
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
