<template>
  <div>
    <h1>路由组件传参-Child</h1>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  age: String,
  name: String,
})
</script>
