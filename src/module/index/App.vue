<template>
  <div>
    <!--顶部导航-->
    <blog-header></blog-header>

    <router-view></router-view>

    <!--底部-->
    <blog-footer></blog-footer>
  </div>
</template>

<script>
  import BlogHeader from 'components/common/header.vue'
  import BlogFooter from 'components/common/footer.vue'
  export default {
    name: 'app',
    components: {
      BlogHeader,
      BlogFooter
    }
  }
</script>

<style>
  @import '../../assets/css/index.css'; /*引入公共样式*/
</style>
