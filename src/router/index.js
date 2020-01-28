import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import Leaderboards from '@/views/Leaderboards.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/leaderboards',
    name: 'leaderboards',
    component: Leaderboards,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: () => import('../views/SignIn.vue'),
    // props: true, // to enable props for route
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('../views/GridSample.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = JSON.parse(localStorage.getItem('uid'));
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (currentUser === null && next.path !== '/sign-in') {
      next({ path: '/sign-in' });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
