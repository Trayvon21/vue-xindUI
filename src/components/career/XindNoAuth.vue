<template class='main'>
  <div class="flex flex-around a-center no-auth">
    <div class="left">
      <img src="../../assets/403.jpg" alt />
    </div>
    <div class="content">
      <h1>403</h1>
      <div class="text">很抱歉，您无权访问该页面</div>
      <x-button @click.native="$router.push('/')" size="small" type="primary">返回首页</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Xind403",
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
.no-auth {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 500px;
  height: 300px;
  .left {
    animation: imgmove 0.8s linear;
    margin-right: 20px;
    img {
      width: 227px;
    }
  }
}
.content {
  animation: textmove 0.8s linear;
  h1 {
    margin-bottom: 10px;
    font-size: 40px;
  }
  .text {
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 20px;
  }
}

@keyframes textmove {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes imgmove {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
