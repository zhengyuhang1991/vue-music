<template>
  <transition name="slide">
    <div class="singer-detail">singer-detail</div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: `singer-detail`
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
