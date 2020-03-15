<template>
  <div>
    <h2>按钮</h2>
    <h3>默认按钮</h3>
    <div class="btn-group">
      <x-button>默认按钮</x-button>
      <x-button type="primary">主要按钮</x-button>
      <x-button type="success">成功按钮</x-button>
      <x-button type="warning">警告按钮</x-button>
      <x-button type="danger">危险按钮</x-button>
      <x-button type="info">信息按钮</x-button>
    </div>
    <h3>朴素按钮</h3>
    <div class="btn-group">
      <x-button plain>朴素按钮</x-button>
      <x-button type="primary" plain>主要按钮</x-button>
      <x-button type="success" plain>成功按钮</x-button>
      <x-button type="warning" plain>警告按钮</x-button>
      <x-button type="danger" plain>危险按钮</x-button>
      <x-button type="info" plain>信息按钮</x-button>
    </div>
    <h3>圆角按钮</h3>
    <div class="btn-group">
      <x-button round>圆角按钮</x-button>
      <x-button type="primary" round>主要按钮</x-button>
      <x-button type="success" round>成功按钮</x-button>
      <x-button type="warning" round>警告按钮</x-button>
      <x-button type="danger" round>危险按钮</x-button>
      <x-button type="info" round>信息按钮</x-button>
    </div>
    <h3>按钮大小调整</h3>
    <div class="btn-group">
      <x-button>默认按钮</x-button>
      <x-button size="medium">中等按钮</x-button>
      <x-button size="small">小型按钮</x-button>
      <x-button size="mini">迷你按钮</x-button>
    </div>
    <div class="btn-group">
      <x-button round>默认按钮</x-button>
      <x-button size="medium" round>中等按钮</x-button>
      <x-button size="small" round>小型按钮</x-button>
      <x-button size="mini" round>迷你按钮</x-button>
    </div>
    <h3>圆形按钮类型</h3>
    <div class="btn-group">
      <x-button circle icon="x-icon-search"></x-button>
      <x-button type="primary" icon="x-icon-edit" circle>主要按钮</x-button>
      <x-button type="success" icon="x-icon-check" circle>成功按钮</x-button>
      <x-button type="warning" icon="x-icon-star" circle>警告按钮</x-button>
      <x-button type="danger" icon="x-icon-delete" circle>危险按钮</x-button>
      <x-button type="info" icon="x-icon-message" circle>信息按钮</x-button>
    </div>
    <h3>功能性按钮类型</h3>
    <div class="btn-group">
      <x-button type="primary" loading>加载中</x-button>
      <x-button autofocus>自动聚焦</x-button>
    </div>
    <h3>禁用按钮</h3>
    <div class="btn-group">
      <x-button disabled>禁用按钮</x-button>
      <x-button type="primary" disabled>主要按钮</x-button>
      <x-button type="success" disabled>成功按钮</x-button>
      <x-button type="warning" disabled>警告按钮</x-button>
      <x-button type="danger" disabled>危险按钮</x-button>
      <x-button type="info" disabled>信息按钮</x-button>
    </div>
    <div class="btn-group">
      <x-button disabled plain>默认按钮</x-button>
      <x-button type="primary" disabled plain>主要按钮</x-button>
      <x-button type="success" disabled plain>成功按钮</x-button>
      <x-button type="warning" disabled plain>警告按钮</x-button>
      <x-button type="danger" disabled plain>危险按钮</x-button>
      <x-button type="info" disabled plain>信息按钮</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewButton",
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
.btn-group {
  display: flex;
  align-items: center;
  div {
    margin: 5px;
  }
}
</style>
