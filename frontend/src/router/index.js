import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/productsView.vue';
import AdminView from '../views/AdminView.vue';
import ContactView from '../views/ContactView.vue';
import SignupView from '../views/SignupView.vue';
import loginView from '../views/loginView.vue';
import userView from '../views/userView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import SingleProductView from '../views/SingleView.vue';
// import SingleProductView from '../views/SingleProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  
    {
      path: '/products/:id',
      name: 'singleProduct',
      component: SingleProductView
    
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component:loginView
  },
  {
    path: '/user',
    name: 'user',
    component: userView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CheckoutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
