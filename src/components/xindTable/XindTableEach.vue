<template>
  <div>
    <div class="box-input" v-if="item===scoped">
      <input type="text" :value="item[prop]" @change="OnChange" />
      <div @click="Changed" class="btn">确定</div>
      <div @click="cancel" class="btn">取消</div>
    </div>
    <div v-else @click="onClick">{{item[prop]}}</div>
  </div>
</template>

<script>
export default {
  inject: ["tables"],
  props: {
    prop: {
      type: String,
      default: ""
    },
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      scoped: null,
      value: ""
    };
  },
  methods: {
    onClick() {
      this.scoped = this.item;
      this.value = this.item[this.prop] 
    },
    Changed() {
      this.item[this.prop] = this.value;
      this.scoped = null;
    },
    OnChange(e) {
      this.value = e.target.value;
    },
    cancel() {
      this.scoped = null;
    }
  },
  mounted() {
    // console.log(this.item);
  }
};
</script>

<style lang="scss" scoped>
.box-input {
  display: flex;
}
.btn {
  color: blue;
  margin: 0 2px;
  cursor: pointer;
}
</style>