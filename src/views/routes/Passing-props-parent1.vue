<template>
  <div>
    <h1>路由组件传参</h1>
    <PassingPropsChild :name="'TY'" :age="'18'"></PassingPropsChild>
  </div>
</template>

<script setup lang="ts">
import PassingPropsChild from './Passing-props-child.vue'
</script>
