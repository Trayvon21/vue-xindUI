<template>
  <div>
    <el-table :data="data" border style="width: 100%" @cell-click="cellClick">
      <el-table-column
        v-for="item in dataDesc"
        :key="item.label"
        :label="item.label"
        :prop="item.prop"
      >
        <template slot-scope="scope">
          <div v-if="scope.row[item.label + 'value']" class="flex a-center">
            <el-input
              size="mini"
              :ref="item.label"
              v-model="scope.row[item.label + 'value']"
              @keydown.enter.native="confirm(scope)"
            ></el-input>
            <div class="flex a-center">
              <el-button type="text" style="margin-left: 8px;" @click.stop="cancel(scope)">取消</el-button>
              <el-button type="text" @click.stop="confirm(scope)">确认</el-button>
            </div>
          </div>
          <div v-else>{{ scope.row[item.prop] }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dataDesc: [
        { label: "序号", prop: "id" },
        { label: "姓名", prop: "user" },
        { label: "时间", prop: "time" }
      ]
    };
  },
  methods: {
    cellClick(row, column, cell) {
      let flag = column.label + "value";
      this.$set(row, flag, row[column.property]);
      this.$nextTick(() => {
        this.$refs[column.label]
          .filter(item => item.value === row[column.property])[0]
          .focus();
      });
    },
    cancel(scope) {
      this.$delete(scope.row, scope.column.label + "value");
    },
    confirm(scope) {
      scope.row[scope.column.property] = scope.row[scope.column.label + "value"];
      this.$delete(scope.row, scope.column.label + "value");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>