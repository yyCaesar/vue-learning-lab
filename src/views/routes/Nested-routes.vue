<template>
  <div>
    <h1>这是一个嵌套路由</h1>
    <h2>传入参数： {{ $route.params.pid }}</h2>
    <!-- 用 name 跳转，避免手写路径出错；完整地址是 /nested-routes/nested-routes-child1 -->
    <RouterLink :to="{ name: 'nested-routes-child1' }">嵌套路由1</RouterLink>
    <span> | </span>
    <RouterLink :to="{ name: 'nested-routes-child2' }">嵌套路由2</RouterLink>
    <!-- 子路由在这里渲染，前提是当前地址匹配到了 children 中的某一条 -->
    <RouterView />
  </div>
</template>
