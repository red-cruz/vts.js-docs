import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: HomeView,
      meta: {
        title: 'Introduction'
      }
    },
    {
      path: '/installation',
      name: 'installation',
      component: () => import('../views/InstallationView.vue'),
      meta: {
        title: 'Installation'
      }
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: () => import('../views/ConfigurationView.vue'),
      meta: {
        title: 'Configuration'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash)
        return {
          el: to.hash,
          top: 10,
          behavior: 'smooth'
        }
      else return { top: 0 }
    }
  }
})

router.beforeEach((to) => {
  const title = to.meta?.title ? to.meta.title + ' - Vts.js' : null
  document.title = title ?? 'Vts.js'
})

export default router
