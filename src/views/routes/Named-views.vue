<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <h1>命名视图</h1>
  <ul>
    <li><RouterLink to="/test">跳转到测试页面</RouterLink></li>
    <li><RouterLink :to="{ name: 'about' }">跳转到关于页面</RouterLink></li>
  </ul>

  <!-- 三个命名视图出口 -->
  <div style="display: flex; gap: 20px">
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px">
      <h3>左侧 leftSidebar</h3>
      <RouterView name="leftSidebar"></RouterView>
    </div>
    <div style="flex: 1; border: 1px solid #ccc; padding: 10px">
      <h3>主 main</h3>
      <RouterView name="main"></RouterView>
    </div>
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px">
      <h3>右侧 rightSidebar</h3>
      <RouterView name="rightSidebar"></RouterView>
    </div>
  </div>
</template>
