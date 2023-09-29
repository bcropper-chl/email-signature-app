import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/basic'
  },
  {
    path: '/basic',
    meta: { title: 'Basic signature details' },
    component: () =>
        import(/* webpackChunkName: "basic" */ './views/Basic.vue')
  },
  {
    path: '/options',
    meta: { title: 'Signature options' },
    component: () =>
        import(/* webpackChunkName: "options" */ './views/Options.vue')
  },
  {
    path: '/projects',
    meta: { title: 'Projects' },
    component: () =>
        import(/* webpackChunkName: "projects" */ './views/Projects.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
