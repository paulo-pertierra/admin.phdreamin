import axios from "axios";
import { reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useAdminAccessStore = defineStore('admin', () => {
  // @paulo-pertierra: State
  const admin = reactive({
    username: "",
    token: ""
  })

  // @paulo-pertierra: Actions
  const loginAdmin = async (username: string, password: string) => {
    axios
      .post('/admin/auth/login', { username, password })
      .then((response) => {
        const { username, token } = response.data.data;
        admin.username = username;
        admin.token = token;
        const router = useRouter();
        router.push("/dashboard");
      })
      .catch(() => {
        alert("Could not log in.");
      })
  }
  const logOutAdmin = () => {
    admin.username = "";
    admin.token = ""
  }
  // @paulo-pertierra: Store Interface
  return { admin, loginAdmin, logOutAdmin };
}, { persist: true })