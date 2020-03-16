<template>
  <div>
    <h2>图片预览</h2>
    <h3>父级不设置宽高</h3>
    <x-image-preview image="img/500.gif" />
    <h3>父级设置宽高</h3>
    <div style="width: 100px;height: 100px;">
      <x-image-preview image="img/500.gif"></x-image-preview>
    </div>
  </div>
</template>

<script>
export default {
  name: "XindImagePreview",
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
