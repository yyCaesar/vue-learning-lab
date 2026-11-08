import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '首页', requiresAuth: false },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: '首页', requiresAuth: true },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
    },
    {
      path: '/dynamic-matching/id/:id/age/:age',
      name: 'dynamic-matching',
      component: () => import('../views/routes/Dynamic-matching.vue'),
    },
    {
      path: '/nested-routes/:pid',
      name: 'nested-routes',
      component: () => import('@/views/routes/Nested-routes.vue'),
      children: [
        // 访问 /nested-routes 时默认重定向到第一个子路由，避免父组件里 <RouterView /> 空白
        {
          path: '',
          redirect: { name: 'nested-routes-child1', params: { pid: 'default' } },
        },
        {
          // 子路由 path 是相对父路由的，实际地址为 /nested-routes/nested-routes-child1
          path: 'nested-routes-child1',
          name: 'nested-routes-child1',
          component: () => import('@/views/routes/Nested-routes-child1.vue'),
        },
        {
          path: 'nested-routes-child2',
          name: 'nested-routes-child2',
          component: () => import('@/views/routes/Nested-routes-child2.vue'),
        },
      ],
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('@/views/routes/Router-navigation.vue'),
    },
    {
      path: '/named-views',
      name: 'named-views',
      redirect: { name: 'named-views-child' },
      component: () => import('@/views/routes/Named-views.vue'),
      children: [
        {
          path: '',
          name: 'named-views-child',
          components: {
            leftSidebar: () => import('@/views/TestView.vue'),
            rightSidebar: () => import('@/views/AboutView.vue'),
            main: () => import('@/views//HomeView.vue'),
          },
        },
      ],
    },
    {
      path: '/redirect-and-alias',
      name: 'redirect-and-alias',
      component: () => import('@/views/routes/Redirect-and-alias.vue'),
      children: [
        {
          path: ':id/:age',
          name: 'redirect-and-alias-child',
          redirect: (to) => {
            return {
              name: 'dynamic-matching',
              params: { id: to.params.id, age: to.params.age },
            }
            // return `/dynamic-matching/id/${to.params.id}/age/${to.params.age}`;
          },
        },
      ],
    },
    {
      path: '/passing-props-parent1',
      name: 'passing-props-parent1',
      component: () => import('@/views/routes/Passing-props-parent1.vue'),
    },
    {
      path: '/passing-props-parent2/name/:name/age/:age', // 👈 必须在这里声明
      name: 'passing-props-parent2',
      component: () => import('@/views/routes/Passing-props-child.vue'), // 直接指向接收 props 的组件
      props: true, // 开启 props 传参
    },
    {
      path: '/navigation-guards',
      component: () => import('@/views/routes/Navigation-guards.vue'),
    },
    {
      path: '/navigation-guards-2',
      component: () => import('@/views/routes/Navigation-guards-2.vue'),
    },
    {
      path: '/router-Meta',
      component: () => import('@/views/routes/Router-Meta.vue'),
    },
    {
      path: '/vuebase',
      component: () => import('@/views/base/VueBase.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  console.log('router.beforeEach to:', to.path)
  console.log('router.beforeEach from:', from.path)
})

export default router
