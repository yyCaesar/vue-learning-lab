<template>
  <div class="about">
    <h1>这是一个动态路由,id:{{ route.params.id }}, age:{{ route.params.age }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

watch(
  () => route.params.id,
  (newId, oldId) => {
    // 对路由变化做出响应...
    console.log('ID 发生变化:', newId, oldId)
  },
)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
