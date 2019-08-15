<template>
    <div ref="div">{{msg}}</div>
</template>

<script>

export default {
  name: 'LearnNgnix',
  data () {
    return {
      msg: 'message'
    }
  },
  methods: {
    changeMsg: function () {
      setTimeout(() => {
        this.msg = 'message-updated'
      }, 1000)
    }
  },
  beforeCreate () {
    console.log('beforeCreate-', this.$el, this.$data, this.msg)
  },
  created () {
    this.changeMsg()
    console.log('created-', this.$el, this.$data, this.msg)
  },
  beforeUpdate () {
    console.log('beforeUpdate-', this.$el, this.$data, this.msg)
  },
  updated () {
    console.log('updated-', this.$el, this.$data, this.msg)
  },
  beforeMount () {
    console.log('beforeMount-', this.$el, this.$data, this.msg)
  },
  mounted () {
    console.log('mounted-', this.$el, this.$data, this.msg)
  },
  beforeDestroy () {
    console.log('beforeDestroy-', this.msg)
  },
  destroyed () {
    console.log('destroyed-', this.$el)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
