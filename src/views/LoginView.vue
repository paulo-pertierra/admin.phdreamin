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
  <div class="flex justify-center items-center min-h-screen py-24 bg-gray-50">
    <div class="max-w-lg w-full">
      <div class="flex justify-center py-10 bg-gray-50">
        <div class="w-full p-12 bg-white border border-gray-200 shadow rounded-lg">
            <div class="mb-6">
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Admin Username</label>
              <input
                v-model="username"
                id="username"
                class="w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 focus:ring focus:border-blue-500"
                placeholder="admin.name"
              />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
              v-model="password"
                type="password"
                id="password"
                placeholder="********"
                class="w-full p-2.5 text-sm border rounded-lg bg-gray-50 text-gray-900 focus:ring focus:border-blue-500"
              />
            </div>
            <button
              @click="loginAndRedirect"
              class="w-full py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg"
            >
              Submit
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
