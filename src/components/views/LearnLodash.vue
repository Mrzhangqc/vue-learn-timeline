<template>
  <el-row :gutter="20">
    <el-col :md="6" :lg="6" :sm="12" :xs="24" v-for="(item,index) in apiList" :key="index">
      <div class="grid-container">
        <div class="grid-header">
          <a href="http://lodash.net/docs/4.16.1.html#_compactarray" target="_blank">{{item.name}}</a>
        </div>
        <div class="grid-content">
          <div class="description">{{item.description}}</div>
          <div class="example">例子:
              <codemirror v-model="item.example" :options="cmOptions"></codemirror>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'LearnLodash',
  data () {
    return {
      apiList: [],
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: '3024-night',
        lineNumbers: true,
        line: true,
        readOnly: true
      }
    }
  },
  created () {
    this.$http.get('learnLodash.json').then(res => {
      this.apiList = res.data
    }).catch(err => {
      this.$alert(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .el-row .el-col {
    .grid-container{
      background-color: #fff;
      padding: 10px;
      margin-top: 20px;
      .description{
        padding: 5px 5px 10px;
      }
      .example {
        // padding: 10px 5px;
        // color: #f1f1f1;
        // background: #222831;
      }
    }
  }
</style>
<style>
 .CodeMirror{
    height: 100px !important;
  }
</style>
