<template>
  <div class="column">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ["tables"],
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.column{
    display: flex;
}
</style>