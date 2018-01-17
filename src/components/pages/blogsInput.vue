<template>
    <div class="b-blogs-input">
      <!--中间内容-->
      <div  class="m-container-small m-padded-tb-big">
        <div class="ui container">
          <form action="#" method="post" class="ui form">

            <div class="required field">
              <div class="ui left labeled input">
                <div class="ui selection compact teal basic dropdown label">
                  <input type="hidden" value="原创" >
                  <i class="dropdown icon"></i>
                  <div class="text">原创</div>
                  <div class="menu">
                    <div class="item" data-value="原创">原创</div>
                    <div class="item" data-value="转载">转载</div>
                    <div class="item" data-value="翻译">翻译</div>
                  </div>
                </div>
                <input type="text" name="title" placeholder="标题">
              </div>
            </div>

            <div class="field">
              <div id="md-content" style="z-index: 1 !important;">
                <mavon-editor :ishljs = "true" style="height: 100%" v-model="value"/>
              </div>
            </div>

            <div class="two fields">
              <div class="field">
                <div class="ui left labeled action input">
                  <label class="ui compact teal basic label">分类</label>
                  <div class="ui fluid selection dropdown">
                    <input type="hidden" name="type">
                    <i class="dropdown icon"></i>
                    <div class="default text">分类</div>
                    <div class="menu">
                      <div class="item" data-value="1">错误日志</div>
                      <div class="item" data-value="2">开发者手册</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="ui left labeled action input">
                  <label class="ui compact teal basic label">标签</label>
                  <div class="ui fluid selection multiple search  dropdown">
                    <input type="hidden" name="tag">
                    <i class="dropdown icon"></i>
                    <div class="default text">标签</div>
                    <div class="menu">
                      <div class="item" data-value="1">java</div>
                      <div class="item" data-value="2">JavaScript</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="ui left labeled input">
                <label class="ui teal basic label">首图</label>
                <input type="text" name="indexPicture" placeholder="首图引用地址">
              </div>

            </div>

            <div class="inline fields">
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" id="recommend" name="recommend" checked class="hidden">
                  <label for="recommend">推荐</label>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" id="shareInfo" name="shareInfo" class="hidden">
                  <label for="shareInfo">转载声明</label>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" id="appreciation" name="appreciation" class="hidden">
                  <label for="appreciation">赞赏</label>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" id="comment" name="comment" class="hidden">
                  <label for="comment">评论</label>
                </div>
              </div>
            </div>

            <div class="ui error message"></div>

            <div class="ui right aligned container">
              <button type="button" class="ui button" onclick="window.history.go(-1)" >返回</button>
              <button class="ui secondary button">保存</button>
              <button class="ui teal button">发布</button>
            </div>

          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import mavonEditor from 'mavon-editor'
  // markdown-it对象：md.s_markdown, md => mavonEditor实例
  //                 or
  //                 mavonEditor.markdownIt
  import 'mavon-editor/dist/css/index.css'
  // use
  Vue.use(mavonEditor)

  export default {
      name: "blogs-input.vue",
      data() {
        return {
          value: '## 快捷键\n' +
          '\n' +
          ' - 加粗    `Ctrl + B` \n' +
          ' - 斜体    `Ctrl + I` \n' +
          ' - 引用    `Ctrl + Q`\n' +
          ' - 插入链接    `Ctrl + L`\n' +
          ' - 插入代码    `Ctrl + K`\n' +
          ' - 插入图片    `Ctrl + G`\n' +
          ' - 提升标题    `Ctrl + H`\n' +
          ' - 有序列表    `Ctrl + O`\n' +
          ' - 无序列表    `Ctrl + U`\n' +
          ' - 横线    `Ctrl + R`\n' +
          ' - 撤销    `Ctrl + Z`\n' +
          ' - 重做    `Ctrl + Y`'
        }
      },
      mounted(){
        this.init();
      },
      methods: {
        // 系统初始化
        init(){
          // 初始化form表单验证规则
          $('.ui.form').form({
            fields : {
              title : {
                identifier: 'title',
                rules: [{
                  type : 'empty',
                  prompt: '标题：请输入博客标题'
                }]
              }
            }
          });

          //初始化Markdown编辑器

        }
      }
  }
</script>

<style scoped>
  #md-content {
    margin: auto;
    width: 100%;
  }
</style>
