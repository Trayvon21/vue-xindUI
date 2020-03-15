<template>
  <div>
    <div>前缀x-icon- Xind-UI</div>
    <div v-for="icon in icons" :key="icon.id">
      <i class="Xind-UI" :class="[`x-icon-${icon}`]"></i>
      {{icon}}
    </div>
  </div>
</template>

<script>
export default {
  name: "XIcon",
  props: {},
  data() {
    return {
      icons: ["loading", "search", "star", "check", "message", "edit", "delete"]
    };
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
