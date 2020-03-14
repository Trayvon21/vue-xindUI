<template>
  <div>
    <h2>登录组件</h2>
    <div>登录组件,目前有通用登录和手机登录可选</div>
    <h3>通用登录</h3>
    <xind-login @submit="submit" />
    <h3>手机登录</h3>
    <xind-phone-login />
  </div>
</template>

<script>
export default {
  name: "LoginView",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    submit(data) {
      this.$message({
        message: `恭喜你，这是一条成功消息${data}`,
        type: "success"
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
