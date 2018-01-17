import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '../components/pages/blogs.vue'
import BlogsList from '../components/pages/blogsList.vue'
import BlogsInput from '../components/pages/blogsInput.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',        // 设置活动类名称
  routes: [
    {
      name: 'Blogs',
      path: '/blogs',
      component: Blogs,
      children: [
        {name: 'BlogsList',   path: '/blogs/blogsList',   component: BlogsList},
        {name: 'BlogsInput',  path: '/blogs/blogsInput',  component: BlogsInput}
      ],
      // 重定向到首页
      redirect: {
          name: 'BlogsList'
      }
    }

  ]
})
