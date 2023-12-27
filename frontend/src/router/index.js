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
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin/AdminView.vue')
    },
    {
      path: '/admin/products',
      name: 'admin-products',
      component: () => import('../views/Admin/AdminProductsView.vue')
    },
    {
      path: '/admin/orders',
      name: 'admin-orders',
      component: () => import('../views/Admin/AdminOrdersView.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/Admin/AdminUsersView.vue')
    },
  ]
})

// router.beforeEach((to, from, next) => {
//     if (to.name === 'account' && !localStorage.getItem('user')) {
//         next({ name: 'index' })
//     } else if (to.name === 'admin' && !localStorage.getItem('user')) {
//         next({ name: 'index' })
//     } else {
//         next()
//     }
// });

export default router
