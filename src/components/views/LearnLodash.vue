<template>
  <el-row :gutter="20" v-loading="loading">
    <el-col :md="6" :lg="6" :sm="12" :xs="24" v-for="(item,index) in apiList" :key="index">
      <div class="grid-container">
        <div class="grid-header">
          <a :href="item.href" target="_blank">{{item.name}}</a>
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
// theme css
import 'codemirror/theme/3024-night.css'
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'

export default {
  name: 'LearnLodash',
  data () {
    return {
      loading: false,
      apiList: [],
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: '3024-night',
        lineNumbers: true,
        line: true,
        readOnly: true,
        scrollbarStyle: 'overlay'
      }
    }
  },
  created () {
    this.loading = true
    this.$http.get('learnLodash.json').then(res => {
      this.loading = false
      this.apiList = res.data
    }).catch(err => {
      this.loading = false
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
      .grid-header{
        a{
          color: #366ed8
        }
      }
      .description{
        padding: 5px 5px 10px;
      }
    }
  }
</style>
<style lang="less">
 .CodeMirror{
    height: 100px !important;
  }
</style>
