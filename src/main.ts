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
  faUserTag
} from '@fortawesome/free-solid-svg-icons';
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import axios from 'axios';
import { useAdminAccessStore } from './stores';
import Swal from 'sweetalert2';

library.add(
  faCaretDown,
  faCircleUser,
  faCog,
  faRightFromBracket,
  faUserClock,
  faUserTag,
  faUserCheck,
  faUserGroup,
  faCamera,
  faCircle
);

const app = createApp(App);

app.use(createPinia().use(piniaPluginPersistedState));
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');

const adminAccessStore = useAdminAccessStore();

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.interceptors.response.use((response) => response, (error) => {
  if (error.response && error.response.status === 401) {
    adminAccessStore.logOutAdmin();
    Swal.fire("Expired Token", "You've been logged out", "warning");
  }
  return Promise.reject(error);
})