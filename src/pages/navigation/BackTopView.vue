<template>
  <div>
    <xBackTop>
      <h2>回到顶部</h2>
      <div v-for="item in 100" :key="item.id">这是一段话{{item}}</div>
    </xBackTop>
  </div>
</template>

<script>
export default {
  name: "BackTopView",
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
