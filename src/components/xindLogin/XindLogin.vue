<template>
  <div class="x-login">
    <el-input prefix-icon="el-icon-user" v-model="formData.user" placeholder="请输入账号"></el-input>
    <el-input
      prefix-icon="el-icon-lock"
      type="password"
      show-password
      v-model="formData.password"
      placeholder="请输入密码"
    ></el-input>
    <x-button :type="flag?'primary':''" :disabled="!flag" @click="submit">登录</x-button>
  </div>
</template>

<script>
export default {
  name: "XindLogin",
  props: {},
  data() {
    return {
      formData: {
        user: "",
        password: ""
      }
    };
  },
  computed: {
    flag() {
      const { user, password } = this.formData;
      return user.length > 0 && password.length > 0;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    submit() {
      this.$emit("submit", this.formData);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.x-login {
  width: 300px;
}
</style>
