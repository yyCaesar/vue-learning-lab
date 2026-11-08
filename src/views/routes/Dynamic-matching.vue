<template>
  <div class="about">
    <h1>这是一个动态路由,id:{{ route.params.id }}, age:{{ route.params.age }}</h1>
    <router-link to="/dynamic-matching/id/1/age/11">切换到 ID: 1</router-link> |
    <router-link to="/dynamic-matching/id/1/age/22">切换到 ID: 2</router-link> |
  </div>
</template>

<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

watch(
  () => route.params.id,
  (newId, oldId) => {
    // 对路由变化做出响应...
    console.log('ID 发生变化:', newId, oldId)
  },
)

onBeforeRouteUpdate((to, from) => {
  console.log('旧参数 (from):', from.params.id)
  console.log('新参数 (to):', to.params.id)
})
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
