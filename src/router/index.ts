import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '@/components/AdminDashboard.vue';
import HomeView from '@/views/HomeView.vue';
import AuthView from '@/views/AuthView.vue';
import ScanView from '@/views/ScanView.vue';
import AdminRegistreeCard from '@/components/AdminRegistreeCard.vue';

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
      component: AuthView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: validateAdmin,
      component: HomeView,
      children: [
        {
          path: '',
          component: AdminDashboard
        },
        {
          path: 'scan',
          component: ScanView
        },
        {
          path: 'registree/:uuid',
          name: 'registree',
          component: AdminRegistreeCard
        }
      ]
    },
    {
      path: '/scan',
      name: 'scan',
      beforeEnter: validateAdmin,
      component: ScanView
    }
  ]
});

export default router;
