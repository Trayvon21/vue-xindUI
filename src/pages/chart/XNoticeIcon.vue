<template>
  <div>
    <h2>通知图标</h2>
    <div class="flex">
      <div>
        消息为空
        <xNoticeIcon></xNoticeIcon>
      </div>
      <div>
        消息数量小于100
        <xNoticeIcon>1</xNoticeIcon>
      </div>
      <div>
        消息数量小于100
        <xNoticeIcon>99</xNoticeIcon>
      </div>
      <div>
        消息数量大于100
        <xNoticeIcon>
          190
          <template v-slot:content>这是一个自定义的菜单</template>
        </xNoticeIcon>
      </div>
    </div>
    <h2>通知菜单(用法同element-ui Popover组件)</h2>
    <div class="flex">
      <div>
        默认宽度为100,正上方弹出菜单
        <xNoticeIcon>
          1
          <template v-slot:content>这是一个自定义的菜单</template>
        </xNoticeIcon>
      </div>
      <div>
        可以控制菜单的宽度和定位
        <xNoticeIcon :width="300" placement="bottom">
          19
          <template v-slot:content>这是一个自定义的菜单</template>
        </xNoticeIcon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XindNoticeIcon",
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
div {
  margin: 10px;
}
</style>
