import axios from 'axios';
import { reactive, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import type { Registree } from '@/types/registree';

export const useAdminAccessStore = defineStore(
  'admin',
  () => {
    // State
    const admin = reactive({
      username: '',
      token: ''
    });

    // Actions
    const loginAdmin = async (username: string, password: string) => {
      await axios
        .post('/admin/auth/login', { username, password })
        .then((response) => {
          const { username, token } = response.data.data;
          admin.username = username;
          admin.token = token;
        })
        .catch(() => {
          alert('Could not log in.');
        });
    };
    const logOutAdmin = () => {
      admin.username = '';
      admin.token = '';
    };
    // Store Interface
    return { admin, loginAdmin, logOutAdmin };
  },
  { persist: true }
);

export const useRegistreeStore = defineStore('registree', () => {
  // State
  const registrees: Ref<Registree[]> = ref([]);

  // Actions
  const getRegistrees = async () => {
    axios
      .get('/register')
      .then((response) => {
        registrees.value = response.data.data;
      })
      .catch((error) => {
        Swal.fire('Error', 'Something went wrong.', 'error');
        console.error(error);
      });
  };

  // Interfaces
  return { registrees, getRegistrees };
});
