<template>
  <div class="x-login">
    <el-input prefix-icon="el-icon-phone" v-model="formData.user" placeholder="请输入手机号"></el-input>
    <div>
      <el-input prefix-icon="el-icon-tickets" v-model="formData.password" placeholder="请输入验证码"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "XindPhoneLogin",
  props: {},
  data() {
    return {
      formData: {
        tel: ""
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
  
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.x-login {
  width: 300px;
}
</style>
