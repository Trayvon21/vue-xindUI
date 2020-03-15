<template>
  <div class="a-center flex">
    <slot name="text"></slot>
    <div class="x-trend-right">
      <i class="x-trend-icon" :class="[classType,colorType]" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XindTrend",
  props: {
    type: {
      type: String,
      default: "up" //接收up、down
    },
    reverseColor: {
      type: Boolean,
      default: false //接收布尔值
    }
  },
  data() {
    return {};
  },
  computed: {
    classType() {
      let styleType = this.type;
      if (this.reverseColor) {
        styleType === "up" ? (styleType = "bottom") : (styleType = "top");
      } else {
        styleType === "up" ? (styleType = "top") : (styleType = "bottom");
      }
      return `el-icon-caret-${styleType}`;
    },
    colorType() {
      return `x-trend-icon-${this.type}`;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.x-trend {
  &-right {
    margin-left: 6px;
  }
  &-icon {
    margin-right: 2px;
  }
}
.x-trend-icon {
  &-up {
    color: red;
  }
  &-down {
    color: green;
  }
}
</style>
