<template>
  <div class="lock-container a-center flex jc-around">
    <div class="lock-main">
      <h2>admin</h2>
      <div class="flex">
        <el-input v-model="password" placeholder="请输入锁屏密码" @change="submit"></el-input>
        <x-button icon="x-icon-edit" @click="submit" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XindLockView",
  props: {},
  data() {
    return { password: "" };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {
    password(val) {}
  },
  methods: {
    submit() {
      let pass = localStorage.getItem("lock");
      if (this.password === pass) {
        localStorage.removeItem("lock");
        this.$router.push("/");
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.lock-container {
  height: 100vh;
  .lock-main {
    height: 40px;
  }
}
</style>
