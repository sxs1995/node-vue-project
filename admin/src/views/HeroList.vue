<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="title" label="称号"></el-table-column>
      <el-table-column prop="categories" label="类型">
        <template v-slot="scope">
          <span v-for="(item, index) in scope.row.categories" :key="index">
            {{item}}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template v-slot="scope">
          <img :src="scope.row.avatar" :alt="scope.row.name" style="height:3em">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template v-slot="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/heroes");
      console.log(res);
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否要删除英雄"${row.name}"?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/heroes/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
