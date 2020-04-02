<template>
  <div>
    <div class="box">{{label}}</div>
    <div class="box" v-for="item in tables.tableData" :key="item.id">
      <x-table-each :item="item" :prop="$attrs.prop"></x-table-each>
    </div>
  </div>
</template>

<script>
import xTableEach from "./XindTableEach";
export default {
  components: {
    xTableEach
  },
  inject: ["tables"],
  props: {
    label: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid gray;
  padding: 2px 30px;
  text-align: center;
  display: flex;
  
}
</style>