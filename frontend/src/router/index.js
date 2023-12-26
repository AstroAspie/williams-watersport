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
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/admin/products',
      name: 'admin-products',
      component: () => import('../views/Admin/AdminProductsView.vue')
    },
    {
      path: '/admin/products/create',
      name: 'admin-products-create',
      component: () => import('../views/Admin/AdminProductsCreateView.vue')
    },
    {
      path: '/admin/products/:id',
      name: 'admin-products-edit',
      component: () => import('../views/Admin/AdminProductsEditView.vue')
    },
    {
      path: '/admin/orders',
      name: 'admin-orders',
      component: () => import('../views/Admin/AdminOrdersView.vue')
    },
    {
      path: '/admin/orders/:id',
      name: 'admin-orders-edit',
      component: () => import('../views/Admin/AdminOrdersEditView.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/Admin/AdminUsersView.vue')
    },
    {
      path: '/admin/users/:id',
      name: 'admin-users-edit',
      component: () => import('../views/Admin/AdminUsersEditView.vue')
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import('../views/Admin/AdminCategoriesView.vue')
    },
    {
      path: '/admin/categories/create',
      name: 'admin-categories-create',
      component: () => import('../views/Admin/AdminCategoriesCreateView.vue')
    },
    {
      path: '/admin/categories/:id',
      name: 'admin-categories-edit',
      component: () => import('../views/Admin/AdminCategoriesEditView.vue')
    },
    {
      path: '/admin/brands',
      name: 'admin-brands',
      component: () => import('../views/Admin/AdminBrandsView.vue')
    },
    {
      path: '/admin/brands/create',
      name: 'admin-brands-create',
      component: () => import('../views/Admin/AdminBrandsCreateView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'index' && !localStorage.getItem('token')) next({ name: 'index' })
  else next()
});

export default router
