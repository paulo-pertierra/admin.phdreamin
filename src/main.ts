import '@/assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCamera,
  faCaretDown,
  faCircle,
  faCircleUser,
  faCog,
  faRightFromBracket,
  faUserCheck,
  faUserClock,
  faUserGroup,
  faUserTag,
  faCaretLeft,
  faCaretRight,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import axios from 'axios';
import { useAdminAccessStore } from './stores';
import Swal from 'sweetalert2';
import { markRaw } from 'vue';

library.add(
  faCaretDown,
  faCaretUp,
  faCircleUser,
  faCog,
  faRightFromBracket,
  faUserClock,
  faUserTag,
  faUserCheck,
  faUserGroup,
  faCamera,
  faCircle,
  faCaretLeft,
  faCaretRight
);

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

const adminAccessStore = useAdminAccessStore();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common.Authorization = 'Bearer ' + adminAccessStore.admin.token || '';
console.log(axios.defaults.headers.common.Authorization);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      adminAccessStore.logOutAdmin();
      Swal.fire('Expired Token', "You've been logged out", 'warning');
      router.push('/auth');
      return;
    }
    return Promise.reject(error);
  }
);
