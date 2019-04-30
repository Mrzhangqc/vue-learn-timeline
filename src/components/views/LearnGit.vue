<template>
   <div class="learn-git-wraper">
      <el-table
        :data="pageData"
        v-loading="loading"
        style="width: 100%"
        :default-sort = "{prop: 'cmd', order: 'descending'}"
        >
        <el-table-column
          prop="cmd"
          label="命令"
          sortable
          width="300">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="描述">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="this.pageSize"
        layout="total, sizes, prev, pager, next"
        :total="this.tableData.length">
      </el-pagination>
   </div>
</template>
<script>

export default {
  name: 'LearnGit',
  data () {
    return {
      loading: true,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      pageData: []
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.handlePage()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.handlePage()
    },
    handlePage () {
      if (!this.tableData.length) {
        // eslint-disable-next-line no-useless-return
        return
      }
      const start = this.pageSize * (this.currentPage - 1)
      const end = start + this.pageSize

      this.pageData = this.tableData.slice(start, end)
    }
  },
  mounted () {
    this.$http.get('api/learnGit.json').then((res) => {
      const { data } = res.data
      this.total = data.length
      this.tableData = data
      this.handlePage()
      this.loading = false
    }).catch((err) => {
      this.loading = false
      this.$alert(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .learn-git-wraper{
    .el-pagination{
      text-align: right;
      padding-right: 0;
      padding-left: 0;
    }
  }
</style>
<style lang="less">
  .learn-git-wraper{
    .el-pagination{
      .el-pagination__total, .el-pagination__sizes{
        float: left;
      }
    }
  }
</style>
