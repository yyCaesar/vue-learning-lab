<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
        <RouterLink to="/dynamic-matching/id/999/age/666">Dynamic Matching</RouterLink>
        <RouterLink :to="{ name: 'dynamic-matching', params: { id: '999', age: '666' } }"
          >Dynamic Matching2</RouterLink
        >
        <RouterLink to="/nested-routes">Nested Routes</RouterLink>
        <RouterLink to="/navigation">Navigation</RouterLink>
        <RouterLink :to="{ name: 'named-views' }">Named Views</RouterLink>
        <RouterLink :to="{ name: 'redirect-and-alias' }">Redirect and Alias</RouterLink>

        <RouterLink :to="{ name: 'passing-props-parent1' }">Passing-props-parent1</RouterLink>
        <RouterLink :to="{ name: 'passing-props-parent2', params: { name: 'tt', age: 18 } }"
          >Passing-props-parent2</RouterLink
        >

        <RouterLink to="/navigation-guards">Navigation-guards</RouterLink>
        <RouterLink to="/navigation-guards-2">Navigation-guards-2</RouterLink>

        <RouterLink to="/router-Meta">Router-Meta</RouterLink>

        <RouterLink to="/vuebase">vuebase</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
