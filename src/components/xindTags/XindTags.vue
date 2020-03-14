<template>
  <div class="flex tags-group">
    <div
      class="tag"
      :class="{'tag-checked':(item.checked?true:false)}"
      v-for="(item,index) in tagsData"
      :key="item.id"
      @click="select(index)"
    >{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "XindTags",
  props: {
    tagsData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    this.tagsData.unshift({ name: "全部" });
    this.tagsData.map(item => {
      this.$set(item, "checked", false);
    });
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
.tags-group {
}
.tag {
  padding: 2px 8px;
  border-radius: 4px;
  margin: 0 10px;
  &-checked {
    background: crimson;
    color: white;
  }
}
</style>
