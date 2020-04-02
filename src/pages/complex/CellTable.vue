<template>
  <div>
    <h2>单元格可编辑表格(非element组件)</h2>
    <x-table :data="tableData" style="width: 100%">
      <x-table-column prop="id" label="日期" width="180"></x-table-column>
      <x-table-column prop="user" label="姓名" width="180"></x-table-column>
      <x-table-column prop="time" label="地址"></x-table-column>
    </x-table>
    <h2>element组件封装</h2>
    <el-tables :data="tableData"></el-tables>
  </div>
</template>

<script>
import elTables from "../../components/xindTable/ElTables";
import data from "../../mock/index";
export default {
  components: {
    elTables
  },
  provide() {
    return {
      tables: this
    };
  },
  data() {
    return {
      tableData: null
    };
  },
  mounted() {
    this.tableData = data.list.slice(0, 8);
  }
};
</script>

<style lang="scss" scoped>
h2{
  margin: 20px;
}
</style>