<template>
  <div>
    <h1>Meta 路由元信息</h1>
    <p>
      当前登录状态:
      <strong>{{ isLoggedIn ? '已登录' : '未登录' }}</strong>
    </p>
    <button @click="toggleLogin">{{ isLoggedIn ? '退出' : '登录' }}</button>

    <nav style="display: flex; gap: 15px; margin-bottom: 20px">
      <router-link to="/">访问 首页 (公开)</router-link>
      <router-link to="/login">访问 登录页 (公开)</router-link>
      <router-link to="/about">访问 about (受保护/需要登录)</router-link>
    </nav>

    <hr />

    <!-- 路由渲染出口 -->
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(localStorage.getItem('token') == 'true')

const toggleLogin = () => {
  const val = isLoggedIn.value
  if (val) {
    localStorage.removeItem('token')
    alert('已登出')
  } else {
    localStorage.setItem('token', 'true')
    isLoggedIn.value = true
    alert('登录成功！现在可以访问后台了')
  }
}

// ==================== 核心：全局前置守卫配合 meta 实现拦截 ====================
router.beforeEach((to, from) => {
  // 1. 动态修改浏览器网页标题（利用 meta.title）
  if (to.meta.title) {
    document.title = to.meta.title as string
  }

  // 2. 检查当前用户是否登录（我们简单用 localStorage 模拟一个登录状态）
  const isLoggedIn = localStorage.getItem('token') === 'true'

  // 3. 核心拦截逻辑：如果目标页面需要登录 (requiresAuth为true)，且用户没登录
  if (to.meta.requiresAuth && !isLoggedIn) {
    console.log('【拦截提示】该页面需要登录才能访问，已为您跳转到登录页！')
    // 强制重定向去登录页
    return { name: 'login' }
  }

  // 其他情况正常放行
})
</script>
