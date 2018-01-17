<template>
    <b-blogs>
      <div class="ui attached pointing menu">
        <div class="ui container">
          <div class="right menu">
            <router-link :to="{name: 'BlogsInput'}" class="item">发布</router-link>
            <router-link :to="{name: 'BlogsList'}" class="teal item">列表</router-link>
          </div>
        </div>
      </div>

      <router-view></router-view>

    </b-blogs>
</template>

<script>
    export default {
        name: "blogs.vue"
    }
</script>

<style scoped>

</style>
