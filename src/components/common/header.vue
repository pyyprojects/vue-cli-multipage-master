<template>
    <!-- 顶部导航 -->
    <div class="b-header">
      <!--导航-->
      <nav class="ui inverted attached segment m-padded-tb-mini m-shadow-small" >
        <div class="ui container">
          <div class="ui inverted secondary stackable menu">
            <h2 class="ui teal header item">博客后台</h2>
            <router-link :to="{name: 'Blogs'}" class="active m-item item m-mobile-hide"><i class="mini home icon"></i>博客</router-link>
            <a href="#" class=" m-item item m-mobile-hide"><i class="mini idea icon"></i>分类</a>
            <a href="#" class="m-item item m-mobile-hide"><i class="mini tags icon"></i>标签</a>
            <div class="right m-item m-mobile-hide menu">
              <div class="ui dropdown item">
                <div class="text">
                  <img class="ui avatar image" src="https://unsplash.it/100/100?image=1005">
                  李仁密
                </div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a href="#" class="item">注销</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="ui menu toggle black icon button m-right-top m-mobile-show" @click="toggle()">
          <i class="sidebar icon"></i>
        </a>
      </nav>

    </div>
</template>

<script>
    export default {
        name: "header",
        mounted(){
          $('.ui.dropdown').dropdown({
            on : 'click'
          });
        },
        methods: {
          // 显示隐藏移动端导航
          toggle (){
            $('.m-item').toggleClass('m-mobile-hide');
          }
        }
    }




</script>

<style>
  .m-padded-mini {
    padding: 0.2em !important;
  }

  .m-padded-tiny {
    padding: 0.3em !important;
  }
  .m-padded {
    padding: 1em !important;
  }

</style>
