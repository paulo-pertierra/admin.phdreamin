import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AuthView from '@/views/AuthView.vue';
import ScanView from "@/views/ScanView.vue";
import RegistreeView from "@/views/RegistreeView.vue";

import { validateAdmin, validateNoAdmin } from './nav.guards';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "home",
      beforeEnter: validateNoAdmin,
      redirect(to) {
        return (to.path = '/auth');
      }
    },
    {
      path: '/auth',
      name: "auth",
      beforeEnter: validateNoAdmin,
      component: AuthView
    },
    {
      path: '/dashboard',
      name: "dashboard",
      beforeEnter: validateAdmin,
      component: HomeView
    },
    {
      path: '/scan',
      name: "scan",
      beforeEnter: validateAdmin,
      component: ScanView
    },
    {
      path: '/registree/:uuid',
      name: "registree",
      beforeEnter: validateAdmin,
      component: RegistreeView
    }
  ]
});

export default router;
