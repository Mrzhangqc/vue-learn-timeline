<template>
    <div class="timeline-container" v-loading="loading">
        <el-timeline>
             <el-timeline-item v-for="(item,index) in timeList" :key="index" :timestamp="item.date" placement="top">
                <el-card>
                    <h4>{{item.name}}</h4>
                    <p>{{`${item.desc} ${item.date} ${item.time}`}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
export default {
  name: 'LearnTimeLine',
  data () {
    return {
      loading: true,
      timeList: []
    }
  },
  mounted () {
    this.$http.get('index.json').then((res) => {
      this.timeList = res.data
      this.loading = false
    }).catch(err => {
      this.$alert(err)
      this.loading = false
    })
  }
}
</script>

<style lang="less" scoped>
    .timeline-container{
      min-height: 300px;
        .el-timeline{
            padding: 20px;
        }
    }
</style>
