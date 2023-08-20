<script lang="ts" setup>
import { ref } from 'vue';
import { useAdminAccessStore } from '@/stores';
import { useRouter } from 'vue-router';
const router = useRouter();

const adminAccessStore = useAdminAccessStore();
const username = ref('');
const password = ref('');

async function loginAndRedirect() {
  await adminAccessStore.loginAdmin(username.value, password.value);
  router.go(0);
}
</script>

<template>
  <h1>Login</h1>
  <label for="username">Username</label>
  <input type="text" v-model="username" />

  <label for="password">Password</label>
  <input type="text" v-model="password" />

  <button @click="loginAndRedirect">Log In</button>
</template>
