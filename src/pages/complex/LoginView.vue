<template>
  <div>
    <h2>登录组件</h2>
    <h3>通用登录</h3>
    <xind-login></xind-login>
  </div>
</template>

<script>
import xindLogin from "../../components/xindLogin/XindLogin"
export default {
  name: "LoginView",
  methods: {
    submit(data) {
      this.$message({
        message: `恭喜你，这是一条成功消息${data}`,
        type: "success"
      });
    }
  },
  components: {
    xindLogin
  }
};
</script>

<style scoped lang="scss">
</style>
