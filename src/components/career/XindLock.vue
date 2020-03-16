<template>
  <div>
    <i @click="dialogVisible=true" class="el-icon-lock" />
    <el-dialog title="设置锁屏密码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-input v-model="password" placeholder="请输入锁屏密码"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "XindLock",
  props: {},
  data() {
    return {
      dialogVisible: false,
      password: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submit() {
      localStorage.setItem("lock", this.password);
      this.$router.push("/xLockView");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
