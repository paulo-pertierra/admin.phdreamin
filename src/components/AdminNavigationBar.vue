<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faCircleUser, faCog, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useAdminAccessStore } from '@/stores';
import { ref } from 'vue';
import router from '@/router';

library.add(faCircleUser, faCaretDown, faCog, faRightFromBracket);

const showAccountControl = ref(false);
function toggleShowAccountControl() {
  showAccountControl.value = showAccountControl.value ? false : true;
}

const adminAccessStore = useAdminAccessStore();

function logOutAndRedirect() {
  adminAccessStore.logOutAdmin();
  router.go(0);
}
</script>

<template>
  <nav class="h-16 shadow-smd text-text mb-10 bg-white">
    <div class="max-w-5xl mx-auto flex items-center h-16 justify-between">
      <h1 class="font-bold text-2xl">PHDreamin' 2023</h1>
      <div class="relative border-2">
        <button
          @click="toggleShowAccountControl()"
          class="absolute -translate-y-1/2 top-1/2 right-0 text-sm font-semibold flex items-center hover:bg-text hover:text-white p-2 rounded-lg transition-colors"
        >
          <font-awesome-icon class="text-lg pr-1" icon="fa-solid fa-circle-user" />
          Administrator
          <font-awesome-icon class="text-sm pl-5" icon="fa-solid fa-caret-down" />
        </button>
        <Transition>
          <div
            v-if="showAccountControl"
            class="absolute top-6 right-0 w-48 rounded-lg bg-white z-10 shadow-smd text-text transition-all"
          >
            <div class="absolute right-0 bg-white rounded-lg shadow-smd px-4 py-2">
              <div class="px-2 py-1 font-semibold rounded-lg bg-text text-zinc-50 my-1">
                <font-awesome-icon class="pr-2" icon="fa-solid fa-circle-user" />Administrator
              </div>
              <RouterLink
                to="/admin/settings"
                class="block px-2 py-1 font-semibold rounded-lg text-text hover:bg-gray-100 my-0.5"
                ><font-awesome-icon class="text-lg pr-2" icon="fa-solid fa-cog" />Settings</RouterLink
              >
              <button
                @click="logOutAndRedirect"
                class="block w-full text-left px-2 py-1 font-semibold rounded-lg text-text hover:bg-gray-100 my-0.5"
              >
                <font-awesome-icon class="text-lg pr-2" icon="fa-solid fa-right-from-bracket" />Log Out
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
