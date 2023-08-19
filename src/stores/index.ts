import axios from "axios";
import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export const useAdminAccessStore = defineStore('admin', () => {
  // State
  const admin = reactive({
    username: "",
    token: ""
  })

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
        alert("Could not log in.");
      })
  }
  const logOutAdmin = () => {
    admin.username = "";
    admin.token = ""
  }
  // Store Interface
  return { admin, loginAdmin, logOutAdmin };
}, { persist: true })

export const useRegistreeStore = defineStore('registree', () => {
  
  
  const registrees = ref([]);

})