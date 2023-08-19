import type { RouteLocationNormalized } from "vue-router";
import { useAdminAccessStore } from "@/stores";
import Swal from "sweetalert2";

export const validateAdmin = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const adminAccessStore = useAdminAccessStore();
  if (!adminAccessStore.admin.token) {
    Swal.fire("Logged Out", "Looks like you're no longer logged in. Redirecting to login page.", "warning")
    return { path: '/auth' };
  }
}

export const validateNoAdmin = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const adminAccessStore = useAdminAccessStore();
  if (adminAccessStore.admin.token) {
    return { path: '/dashboard' }
  }
}