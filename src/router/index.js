import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: "Home", 
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/preview', 
      name: "Preview", 
      component: () => import('../views/PreviewThumbnailPage.vue')
    }
  ],
})

export default router
