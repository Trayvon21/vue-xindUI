<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        v-for="item in dataDesc"
        :key="item.label"
        :label="item.label"
        :prop="item.prop"
      >
        <template slot-scope="scope">
          <div v-if="scope.row.flag" class="flex a-center">
            <el-input size="mini" :ref="item.label" v-model="scope.row.flag[item.prop]"></el-input>
          </div>
          <div v-else>{{ scope.row[item.prop] }}</div>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <div class="flex a-center" v-if="scope.row.flag">
            <el-button type="text" style="margin-left: 8px;" @click.stop="cancel(scope)">取消</el-button>
            <el-button type="text" @click.stop="confirm(scope)">确认</el-button>
          </div>
          <div class="flex a-center" v-else>
            <el-button type="text" style="margin-left: 8px;" @click.stop="onEdit(scope)">编辑</el-button>
            <el-button type="text" @click.stop="del(scope)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import data from "../../mock/index";
export default {
  data() {
    return {
      dataDesc: [
        { label: "序号", prop: "id" },
        { label: "姓名", prop: "user" },
        { label: "时间", prop: "time" }
      ],
      tableData: null
    };
  },
  methods: {
    onEdit(scope) {
      let values = JSON.parse(JSON.stringify(scope.row));
      this.$set(scope.row, "flag", values);
    },
    cancel(scope) {
      this.$delete(scope.row, "flag");
    },
    confirm(scope) {
      for (let i in scope.row.flag) {
        scope.row[i] = scope.row.flag[i];
      }
      this.$delete(scope.row, "flag");
    },
    del(scope) {
      this.tableData = this.tableData.filter(item => item !== scope.row);
    }
  },
  mounted() {
    this.tableData = data.list.slice(0, 8);
  }
};
</script>

<style lang="scss" scoped>
</style>