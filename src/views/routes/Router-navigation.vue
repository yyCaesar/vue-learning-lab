<template>
  <div>
    <h1>编程式导航</h1>
    <button @click="go1">跳转普通页面</button>
    <button @click="go2">跳转嵌套子页面</button>
    <button @click="go3">Replace</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const go1 = () => {
  router.push({ path: '/test' })
}

const go2 = () => {
  router.push({ name: 'nested-routes-child1', params: { pid: '123' } })
}

const go3 = () => {
  router.replace({ path: '/test' })
}
</script>
