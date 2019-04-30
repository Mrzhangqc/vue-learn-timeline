<template>
    <div class="timeline-container">
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
      timeList: []
    }
  },
  mounted () {
    this.$http.get('api/index.json').then((res) => {
      const { data } = res.data
      this.timeList = data
    }).catch((err) => {
      this.$alert(err)
    })
  }
}
</script>

<style lang="less" scoped>
    .timeline-container{
        .el-timeline{
            padding: 20px;
        }
    }
</style>
