<template>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view/>
        <!-- <keep-alive :include="">

        </keep-alive> -->
      </transition>
    </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="less" scoped>
  .app-main{
    background-color: #f0f2f5;
    padding: 20px;
  }
</style>
