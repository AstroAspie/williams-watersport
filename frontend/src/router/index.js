import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
    // {
    //   path: "/products/:id",
    //   name: "product",
    //     component: () => import("../views/ProductView.vue")
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //     component: () => import('../views/CartView.vue')
    // },
    // {
    //   path: '/checkout',
    //   name: 'checkout',
    //   component: () => import('../views/CheckoutView.vue')
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/ContactView.vue')
    // },
    // {
    //   path: '/'
    // }
  ]
})

export default router
