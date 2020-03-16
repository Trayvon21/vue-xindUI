<template>
  <div>
    <img @click="flag=true" :src="image" class="view" alt />
    <div v-if="flag" class="zoomIn">
      <img @click="flag=false" class="zoomShow" :src="image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "XindImagePreview",
  props: {
    image: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      flag: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    zoomIn() {}
  },
  components: {}
};
</script>

<style scoped lang="scss">
.view {
  cursor: zoom-in;
  max-width: 100%;
  max-height: 100%;
}
.zoomIn {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: #ededed80;
  text-align: center;
  align-items: center;
  .zoomShow {
    cursor: zoom-in;
    // display: inline-block;
    width: auto;
    height: 100%;
  }
}
</style>
