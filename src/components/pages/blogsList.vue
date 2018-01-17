<template>
    <div class="b-content">
      <!--中间内容-->
      <div  class="m-container-small m-padded-tb-big">
        <div class="ui container">
          <form action="#" method="post" class="ui segment form">
            <div class="inline fields">
              <div class="field">
                <input type="text" name="title" placeholder="标题">
              </div>
              <div class="field">
                <div class="ui selection dropdown">
                  <input type="hidden" name="type">
                  <i class="dropdown icon"></i>
                  <div class="default text">分类</div>
                  <div class="menu">
                    <div class="item" data-value="1">错误日志</div>
                    <div class="item" data-value="2">开发者手册</div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <input type="checkbox" id="recommend" name="recommend">
                  <label for="recommend">推荐</label>
                </div>
              </div>
              <div class="field">
                <button class="ui mini teal basic button"><i class="search icon"></i>搜索</button>
              </div>
            </div>
          </form>

          <table class="ui celled table">
            <thead>
            <tr>
              <th></th>
              <th>标题</th>
              <th>类型</th>
              <th>推荐</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>刻意练习清单</td>
              <td>认知升级</td>
              <td>是</td>
              <td>2017-10-02 09:45</td>
              <td>
                <a href="#" class="ui mini teal basic button">编辑</a>
                <a href="#" class="ui mini red basic button">删除</a>
              </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th colspan="6">
                <div class="ui mini pagination menu">
                  <a class=" item">上一页</a>
                  <a class=" item">下一页</a>
                </div>
                <a href="#" class="ui mini right floated teal basic button">新增</a>
              </th>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "blogsList.vue"
    }
</script>

<style scoped>

</style>
