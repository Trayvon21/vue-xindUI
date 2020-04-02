<template>
  <div>
    <x-form :model="formData" :rules="rules" ref="ruleForm">
      <x-form-item required label="用户名" prop="username">
        <x-input v-model="formData.username" placeholder="请输入用户名"></x-input>
      </x-form-item>
      <x-form-item required label="密码" prop="password">
        <x-input type="password" v-model="formData.password" placeholder="请输入密码" @keydown.enter.native="submit('ruleForm')"></x-input>
      </x-form-item>
      <x-form-item>
        <x-button type="primary" @click="submit('ruleForm')">登录</x-button>
        <x-button type="info" @click="reset('ruleForm')">重置</x-button>
      </x-form-item>
    </x-form>
  </div>
</template>

<script>
export default {
  name: "XindLogin",
  provide() {
    return {
      form: this
    };
  },
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "必须为3-10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "必须为3-10个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
      });
    },
    reset(formName) {
      this.$refs[formName].reset();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>