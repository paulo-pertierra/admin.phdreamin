import { createRouter, createWebHistory } from 'vue-router';
import { validateAdmin, validateNoAdmin } from './nav.guards';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: validateNoAdmin,
      redirect(to) {
        return (to.path = '/auth');
      }
    },
    {
      path: '/auth',
      name: 'auth',
      beforeEnter: validateNoAdmin,
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: validateAdmin,
      component: () => import("@/views/HomeView.vue"),
      children: [
        {
          path: '',
          component: () => import("@/components/AdminDashboard.vue")
        },
        {
          path: 'scan',
          component: () => import("@/views/ScanView.vue")
        },
        {
          path: 'registree/:uuid',
          name: 'registree',
          component: () => import("@/components/AdminRegistreeCard.vue")
        }
      ]
    },
    {
      path: '/scan',
      name: 'scan',
      beforeEnter: validateAdmin,
      component: () => import("@/views/ScanView.vue")
    }
  ]
});

export default router;
