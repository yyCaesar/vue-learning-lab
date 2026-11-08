<template>
  <div>导航守卫</div>

  <div class="card">
    <h3>当前路由信息 (useRoute)</h3>
    <p><strong>当前路径 (path):</strong> {{ route.path }}</p>
    <p><strong>路由参数 (params):</strong> {{ route.params }}</p>
    <p><strong>查询参数 (query):</strong> {{ route.query }}</p>
  </div>

  <div class="card">
    <h3>路由器跳转方法 (useRouter)</h3>
    <button @click="goHome">返回首页 (router.push)</button>
    <button @click="replaceToAbout">替换当前页 (router.replace)</button>
    <button @click="goBack">后退 (router.back)</button>
    <button @click="go">前进 (router.go)</button>
  </div>

  <div class="card">
    <h3>离开守卫测试 (onBeforeRouteLeave)</h3>
    <p>请在下方输入框随便写点东西，然后尝试点击上面的“返回首页”，看会发生什么：</p>
    <input v-model="fromData" placeholder="请输入信息" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const router = useRouter()
const route = useRoute()

const fromData = ref('')

const goHome = () => {
  router.push('/')
}

const replaceToAbout = () => {
  router.replace('/about')
}

const goBack = () => {
  router.back()
}

const go = () => {
  router.go(1)
}

//离开路由前
onBeforeRouteLeave((to, from) => {
  console.log('准备去往：', to.path)
  console.log('准备离开：', from.path)

  if (to.path == '/about') {
    console.log('禁止前往about')
    return false
  }

  if (fromData.value.trim() != '') {
    const answer = window.confirm('你还有未保存的内容，确定要离开吗？')
    if (!answer) {
      return false
    }
  }
})

//当前路由发生改变
onBeforeRouteUpdate((to, from) => {
  console.log('update 准备去往：', to.path)
  console.log('update 准备离开：', from.path)
})
</script>

<style scoped>
.demo-container {
  padding: 20px;
}
.card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f9f9f9;
}
button {
  margin-right: 10px;
  padding: 8px 14px;
  cursor: pointer;
}
input {
  width: 280px;
  padding: 6px;
}
</style>
