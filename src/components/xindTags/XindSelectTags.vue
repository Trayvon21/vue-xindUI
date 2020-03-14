<template>
  <div class="selectTags">
    <div class="isOpen" @click="flag=!flag">
      <span>{{flag?'收起':'展开'}}</span>
      <i :class="['el-icon-arrow-'+[flag?'up':'down']]" />
    </div>
    <div class="flex flex-wrap" :style="{height:(flag?'auto':'30px')}">
      <div
        :style="{background:(item.checked?color:''),color:(item.checked?'white':'')}"
        class="tag"
        v-for="(item,index) in tagsData"
        :key="item.id"
        @click="select(index)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XindSelectTags",
  props: {
    tagsData: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      flag: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.tagsData);
    this.tagsData.unshift({ name: "全部" });
    this.tagsData.map(item => {
      this.$set(item, "checked", false);
    });
    console.log(this.tagsData);
  },
  watch: {},
  methods: {
    select(index) {
      this.tagsData[index].checked = !this.tagsData[index].checked;
      if (index === 0) {
        this.tagsData.map(
          (item, index, arr) => (item.checked = arr[0].checked)
        );
      } else {
        const flag = this.tagsData.slice(1).every(item => item.checked);
        this.tagsData[0].checked = flag;
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.selectTags {
  position: relative;
  overflow: hidden;
  .isOpen {
    color: blue;
    position: absolute;
    padding: 2px 8px;
    margin: 2px;
    right: 0;
    top: 0;
  }
}
.tag {
  padding: 2px 8px;
  border-radius: 4px;
  margin: 2px;
  &-checked {
    background: crimson;
    color: white;
  }
}
</style>
