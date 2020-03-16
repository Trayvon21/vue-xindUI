<template>
  <div class="notice-container a-center">
    <el-tooltip v-if="count>99&&!content" placement="top">
      <div slot="content">您有{{count}}条信息</div>
      <div class="notice-count a-center">...</div>
    </el-tooltip>
    <div v-if="count>0&&count<=99&&!content" class="notice-count">{{count}}</div>
    <el-popover
      v-if="content"
      :placement="placement"
      :width="width"
      trigger="click"
      :content="content"
    >
      <div slot="reference" class="notice-count a-center">{{99>=count?count:'...'}}</div>
    </el-popover>
    <i class="el-icon-bell"></i>
  </div>
</template>

<script>
export default {
  name: "XindNoticeIcon",
  props: {
    width: {
      type: Number,
      default: 100
    },
    placement: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    count() {
      return this.$slots.default ? this.$slots.default[0].text : 0;
    },
    content() {
      return this.$slots.content ? this.$slots.content[0].text : null;
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
.notice-container {
  position: relative;
  display: inline-block;
  font-size: 22px;
  height: 30px;
}
.notice-count {
  position: absolute;
  top: -6px;
  left: 12px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background: #ed4014;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  &:focus {
    outline: none;
  }
}
</style>
