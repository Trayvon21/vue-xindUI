<template>
  <div>
    <input v-bind="$attrs" @input="onInput" @blur="onBlur" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "Xinput",
  methods: {
    onInput(e) {
      console.log(e.target.value);
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    },
    onBlur(e) {
      this.$parent.$emit("validate");
      this.$emit("blur", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>