<template>
  <div class="guards-demo">
    <h1>🧭 导航守卫 Demo 页面</h1>
    <p>
      当前登录状态：<span :style="{ color: isLoggedIn ? 'green' : 'red' }">{{
        isLoggedIn ? '已登录' : '未登录'
      }}</span>
    </p>

    <div class="actions">
      <button @click="toggleLogin">
        {{ isLoggedIn ? '点击模拟登出' : '点击模拟登录' }}
      </button>
      <button @click="goHome">返回首页</button>
    </div>

    <div class="form-section">
      <h3>测试“离开前确认”离开守卫：</h3>
      <p>请在下方输入框随便写点东西，然后尝试直接点链接或返回，看看会发生什么：</p>
      <input v-model="userInput" placeholder="请输入一些未保存的内容..." />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false) // 默认未登录
const userInput = ref('')

// 模拟切换登录状态
const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value
  if (isLoggedIn.value) {
    alert('模拟登录成功！现在你可以去访问受保护的页面了。')
  } else {
    alert('已登出。')
  }
}

const goHome = () => {
  router.push('/')
}

// 1. 组件内离开守卫 (onBeforeRouteLeave)
// 当用户想离开这个页面时触发（比如填了东西没保存，弹窗询问）
onBeforeRouteLeave((to, from) => {
  if (userInput.value.trim() !== '') {
    const answer = window.confirm('你还有未保存的内容，确定要离开吗？')
    if (!answer) {
      return false // 取消导航，留在当前页
    }
  }
})

// 2. 组件内复用更新守卫 (onBeforeRouteUpdate)
// 如果这个页面带参数（例如 /guards/:id），当 id 改变但组件被复用时触发
onBeforeRouteUpdate((to, from) => {
  console.log('路由参数发生变化了:', from.params, '-->', to.params)
})
</script>

<style scoped>
.guards-demo {
  padding: 20px;
}
.actions {
  margin: 15px 0;
}
.actions button {
  margin-right: 10px;
  padding: 8px 16px;
  cursor: pointer;
}
.form-section {
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #ddd;
}
.form-section input {
  width: 300px;
  padding: 6px;
}
</style>
