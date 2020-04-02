<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XindLogin",
  inject: ["form"],
  methods: {
    validate(valid) {
      let tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      Promise.all(tasks)
        .then(() => valid(true))
        .catch(() => valid(false));
    },
    reset() {
      let formData = this.form.formData;
      for (let i in formData) {
        formData[i] = "";
      }
      this.$children
        .filter(item => item.errMsg)
        .map(item => (item.errMsg = ""));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>