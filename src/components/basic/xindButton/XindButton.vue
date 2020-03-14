<template>
  <div>
    <button
      class="t-btn"
      :class="[typeClass,sizeClass,isPlain,roundClass,circleClass,isDisabled]"
      :type="nativeType"
      :disabled="disabled"
      :autofocus="autofocus"
    >
      <i v-if="icon" class="trayvon" :class="icon"></i>
      <i v-if="loading" class="trayvon rotate t-icon-loading"></i>
      <slot v-if="!circle"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "TButton",
  props: {
    size: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: "button"
    }
  },
  data() {
    return {};
  },
  computed: {
    typeClass() {
      return `t-btn-${this.type}`;
    },
    sizeClass() {
      return this.size ? `t-btn-${this.size}` : "";
    },
    isPlain() {
      return this.plain ? `t-btn-${this.type}-isPlain` : "";
    },
    roundClass() {
      let start = "t-btn";
      this.sizeClass ? (start = this.sizeClass) : "";
      return this.round ? `${start}-round` : "";
    },
    circleClass() {
      return this.circle ? "t-btn-circle" : "";
    },
    isDisabled() {
      return this.disabled
        ? this.plain
          ? `t-btn-${this.type}-isDisabled-plain`
          : `t-btn-${this.type}-isDisabled`
        : "";
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
.t-btn {
  width: 98px;
  padding: 12px 20px;
  font-size: 14px;
  line-height: 14px;
  border-radius: 4px;
  outline: none;
  &-circle {
    width: 40px;
    height: 40px;
    padding: 12px;
    border-radius: 50% !important;
  }
  &-round {
    border-radius: 20px;
  }
  &-medium {
    padding: 10px 20px;
    &-round {
      border-radius: 18px;
    }
  }
  &-small {
    width: 80px;
    padding: 9px 15px;
    font-size: 12px;
    line-height: 12px;
    &-round {
      border-radius: 16px;
    }
  }
  &-mini {
    width: 80px;
    padding: 7px 5px;
    font-size: 12px;
    line-height: 12px;
    &-round {
      border-radius: 14px;
    }
  }
  &-default {
    background: #fff;
    color: #606266;
    &:active {
      color: #3a8ee6;
      border: 1px solid #3a8ee6;
    }
    &:focus,
    &:hover {
      color: #409eff;
      background-color: #ecf5ff;
    }
    &-isPlain {
      &:focus,
      &:hover {
        background: white;
        border: 1px solid #3a8ee6;
      }
    }
    &-isDisabled {
      cursor: not-allowed;
      background: white !important;
      color: #94979c !important;
      &-plain {
        border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186) !important;
        cursor: not-allowed;
        color: #94979c !important;
        background: white !important;
      }
    }
  }

  &-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:active {
      background-color: #154c83 !important;
    }
    &-isPlain {
      background: #409eff18;
      color: #409eff;
      &:focus,
      &:hover {
        color: white;
        background: #409eff;
        border: 1px solid #3a8ee6;
      }
    }
    &-isDisabled {
      cursor: not-allowed;
      background: #409eff80 !important;
      border: 1px solid #6db5fd80;
      &-plain {
        cursor: not-allowed;
        color: #409eff90 !important;
        border-color: #3687d818 !important;
        background: #409eff18 !important;
      }
    }
  }
  &-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:active {
      background-color: #3b791c !important;
    }
    &-isPlain {
      background: #67c23a18;
      color: #67c23a;
      &:focus,
      &:hover {
        color: white;
        background: #67c23a;
        border: 1px solid #67c23a;
      }
    }
    &-isDisabled {
      cursor: not-allowed;
      border-color: #67c23a90 !important;
      background: #67c23a80 !important;
      &-plain {
        cursor: not-allowed;
        color: #67c23a90 !important;
        border-color: rgba(42, 105, 168, 0.094) !important;
        background: #67c23a18 !important;
      }
    }
  }
  &-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:active {
      background-color: #686a6e !important;
    }
    &-isPlain {
      background: #90939918;
      color: #909399;
      &:focus,
      &:hover {
        color: white;
        background: #909399;
        border: 1px solid #909399;
      }
    }
    &-isDisabled {
      cursor: not-allowed;
      border-color: #686a6e70 !important;
      background: #686a6e80 !important;
      &-plain {
        cursor: not-allowed;
        color: #90939990 !important;
        border-color: #d7d8db !important;
        background: #90939918 !important;
      }
    }
  }
  &-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:active {
      background-color: #bb8430 !important;
    }
    &-isPlain {
      background: #e6a23c18;
      color: #e6a23c;
      &:focus,
      &:hover {
        color: white;
        background: #e6a23c;
        border: 1px solid #e6a23c;
      }
    }
    &-isDisabled {
      cursor: not-allowed;
      border-color: #e6a23c80 !important;
      background: #e6a23c90 !important;
      &-plain {
        cursor: not-allowed;
        color: #e6a23c90 !important;
        border-color: #e2c190 !important;
        background: #e6a23c18 !important;
      }
    }
  }
  &-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:active {
      background-color: #ce5252 !important;
    }
    &-isPlain {
      background: #f56c6c18;
      color: #f56c6c;
      &:focus,
      &:hover {
        color: white;
        background: #f56c6c;
        border: 1px solid #ffb7b7;
      }
    }
    &-isDisabled {
      cursor: not-allowed;
      border-color: #ffb7b790 !important;
      background: #f56c6c80 !important;
      &-plain {
        cursor: not-allowed;
        color: #f56c6c90 !important;
        border-color: #f19c9c !important;
        background: #f56c6c18 !important;
      }
    }
  }
}
.trayvon {
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(270deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 0.8s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}
</style>
