<template>
  <div class="flex a-center">
    <div class="progress-container">
      <div
        :style="{height:(`${progressHight}px`),background:(color),lineHeight:(`${progressHight}px`),fontSize:(`${progressHight>24?(progressHight/2):12}px`)}"
        class="progress-content"
        ref="content"
      ></div>
    </div>
    <div v-if="showText" class="progress-count" ref="count">{{percentage}}%</div>
  </div>
</template>

<script>
export default {
  name: "XindProgress",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    showText: {
      type: Boolean,
      default: true
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    textInside: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "rgb(64, 158, 255)"
    },
    isAnimate: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.textInside ? this.$refs.content.append(this.$refs.count) : null;
    setTimeout(() => {
      let content = this.$refs.content;
      if (this.isAnimate) {
        content.style.transition = `width ${this.duration}s ease`;
      }
      content.style.width = `${this.percentage}%`;
    }, 20);
  },
  computed: {
    progressHight() {
      return this.strokeWidth < 18 && this.textInside ? 18 : this.strokeWidth;
    }
  }
};
</script>

<style scoped lang="scss">
.progress-container {
  width: 100%;
  background: #ebeef5;
  border-radius: 100px;
  .progress-content {
    position: relative;
    border-radius: 100px;
    width: 0;
    display: flex;
    justify-content: flex-end;
    border-radius: 100px;
    .progress-count {
      position: absolute;
      color: white;
      right: 0;
    }
  }
}
.progress-count {
  font-size: 12px;
  margin-left: 5px;
}
</style>
