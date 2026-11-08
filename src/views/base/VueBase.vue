<template>
  <div>
    <button @click="ClickCount">文本插值:{{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

const ClickCount = () => {
  count.value++
}
</script>
