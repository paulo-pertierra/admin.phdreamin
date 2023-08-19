import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '@/views/AuthView.vue';
import { validateAdmin } from './nav.guards';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect(to) {
        return (to.path = '/auth');
      }
    },
    {
      path: '/auth',
      component: AuthView
    },
    {
      path: '/dashboard',
      beforeEnter: validateAdmin,
      component: HomeView
    }
  ]
});

export default router;