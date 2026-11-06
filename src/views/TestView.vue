<template>
  <div class="about">
    <h1>This is a test page</h1>
    <h2>问号传参</h2>
    <br />
    <div>
      <p>id:{{ route.query.id }}</p>
      <p>age:{{ route.query.age }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
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
