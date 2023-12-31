import axios from 'axios';
import { reactive, ref, watch, type Ref } from 'vue';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import type { Registree, RegistreeStat } from '@/types/registree.type';
import type { Meta } from '@/types/meta.type';

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
      return await axios
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
  const meta: Ref<
    | (Meta & {
        stats: RegistreeStat;
      })
    | undefined
  > = ref(undefined);

  const isloading = ref(true);

  const queryParams: {
    orderby?: keyof Registree;
    order?: 'asc' | 'desc';
    filterby?: keyof Registree;
    filter?: string;
    page?: number;
  } & { sfusers?: 'true' | 'false' } = reactive({
    page: 1
  });

  const reset = ref(true);
  // Actions
  watch(queryParams, () => {
    getRegistrees();
  });
  watch(reset, () =>{
    getRegistrees();
  })

  const getRegistrees = async () => {
    isloading.value = true;
    if (reset.value) {
      queryParams.filter = undefined;
      queryParams.filterby = undefined;
      queryParams.orderby = undefined;
      queryParams.order = undefined;
      queryParams.sfusers = undefined;
      reset.value = false;
    }
    axios
      .get('/registree', { params: queryParams })
      .then((response) => {
        registrees.value = response.data.data;
        meta.value = response.data.meta;
        isloading.value = false;
      })
      .catch((error) => {
        Swal.fire('Error', 'Something went wrong.', 'error');
        console.error(error);
      });
  };

  // Interfaces
  return { registrees, getRegistrees, meta, isloading, queryParams, reset };
});
