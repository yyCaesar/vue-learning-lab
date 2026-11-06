<template>
  <div>
    <h1>重定向和别名</h1>

    <div>
      <RouterLink to="/about">静态重定向 about</RouterLink>
      <RouterLink :to="{ name: 'test' }">静态重定向 test</RouterLink>
      <RouterLink :to="{ name: 'dynamic-matching', params: { id: 888, age: 999 } }"
        >动态重定向</RouterLink
      >
      <RouterLink to="/redirect-and-alias/999/666">自动重定向</RouterLink>

      <br />
      <input v-model="id" placeholder="请输入id" />
      <input v-model="age" placeholder="请输入age" />
      <button @click="handleJump1">dynamic-matching 路径参数跳转</button>
      <button @click="handleJump2">dynamic-matching 问号传参跳转</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const id = ref('')
const age = ref('')

const handleJump1 = () => {
  if (!id.value || !age.value) {
    alert('请输入id和age')
    return
  }
  // const targetPath = `/dynamic-matching/id/${id.value}/age/${age.value}`
  // router.push(targetPath)
  router.push({
    name: 'dynamic-matching',
    params: { id: id.value, age: age.value },
  })
}

const handleJump2 = () => {
  if (!id.value || !age.value) {
    alert('请输入id和age')
    return
  }

  router.push({
    // path: '/test',
    name: 'test',
    query: {
      id: id.value,
      age: age.value,
    },
  })
}
</script>
