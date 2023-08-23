<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import { RouterLink, useRoute } from 'vue-router';
import { format } from 'date-fns';

import type { Ref } from 'vue';
import type { Registree, Status } from '@/types/registree.type';
import Swal from 'sweetalert2';
const route = useRoute();

const registree: Ref<Registree | undefined> = ref();

const cardLoading = ref(true);
onMounted(() => {
  axios
    .get(`/registree/${route.params.uuid}`)
    .then((response) => {
      registree.value = response.data.data;
      cardLoading.value = false;
    })
    .catch(() => {
      Swal.fire('Error.', 'Could not complete your request.', 'error');
    });
});

const registreeFullname = computed(() => registree.value?.firstName + ' ' + registree.value?.lastName);

const cardColor = computed(() => {
  if (registree.value?.status === 'PENDING') return 'orange';
  if (registree.value?.status === 'PAID') return 'sky';
  if (registree.value?.status === 'ATTENDED') return 'green';
  return 'gray';
});

const readableRegistrationDate = computed(() => {
  if (typeof registree?.value?.createdAt !== 'undefined') {
    return format(new Date(registree?.value?.createdAt), 'PPp');
  }
  return 'No date';
});

function submitNewRegistreeStatus(status: Status) {
  axios.put(`/registree/${registree.value?.uuid}?status=${status}`).then(() => {
    axios.get(`/registree/${route.params.uuid}`).then((response) => {
      registree.value = response.data.data;
    });
  });
  Swal.fire('Success', `User is successfully set to ${status}`);
}
</script>

<template>
  <RouterLink class="max-w-sm mx-auto w-full block px-2 hover:underline" to="/dashboard"
    ><font-awesome-icon class="mr-2" icon="fa-solid fa-caret-left" />Go Home</RouterLink
  >
  <div class="relative max-w-sm mx-auto shadow-2xl rounded-lg overflow-hidden transition-all">
    <div
      class="relative h-48 transition-colors duration-500"
      :class="{
        'bg-orange-500': cardColor === 'orange',
        'bg-sky-500': cardColor === 'sky',
        'bg-green-500': cardColor === 'green'
      }"
    >
      <div class="absolute right-0 p-2 m-4 font-semibold text-white">
        {{ registree?.status }}<font-awesome-icon class="pl-2" icon="fa-solid fa-circle"></font-awesome-icon>
      </div>
    </div>
    <div
      class="absolute left-1/2 rounded-full border-4 -translate-x-1/2 -translate-y-1/2 transition-colors duration-500"
      :class="{
        'border-orange-500': cardColor === 'orange',
        'border-sky-500': cardColor === 'sky',
        'border-green-500': cardColor === 'green'
      }"
    >
      <div class="w-[120px] h-[120px] flex items-center justify-center bg-white overflow-hidden rounded-full">
        <font-awesome-icon class="text-7xl transition-all text-white"       :class="{
        'text-orange-500': cardColor === 'orange',
        'text-sky-500': cardColor === 'sky',
        'text-green-500': cardColor === 'green'
      }" icon="fa-solid fa-user"></font-awesome-icon>
      </div>
    </div>
    <div v-if="!cardLoading">
      <div class="h-64 pt-20 text-center">
        <p class="font-semibold">{{ registreeFullname }}</p>
        <div
          v-show="registree?.salesforceUser"
          class="inline h-fit bg-sky-600 text-zinc-50 rounded-md w-fit pl-1 text-center mr-1"
        >
          SF
        </div>
        <span>{{ registree?.company }}</span>
        <div class="text-sm my-4">
          <p>Phone: {{ registree?.contactNumber }}</p>
          <p>
            Email:
            <a class="underline" :href="'mailto:' + registree?.contactEmail">{{ registree?.contactEmail }}</a>
          </p>
        </div>
        <p class="text-xs">Registered {{ readableRegistrationDate }}</p>
      </div>
      <div class="mx-auto flex justify-evenly">
        <button
          @click="submitNewRegistreeStatus('PAID')"
          class="transition-all hover:bg-sky-700 text-lg font-bold text-white bg-sky-600 p-2 w-full"
        >
          PAID
        </button>
        <button
          @click="submitNewRegistreeStatus('ATTENDED')"
          class="transition-all hover:bg-green-700 text-lg font-bold text-white bg-green-600 p-2 w-full"
        >
          ATTENDED
        </button>
      </div>
    </div>
    <div v-else class="flex w-full items-center justify-center h-64">
      <font-awesome-icon class="animate-spin text-gray-400" icon="fa-solid fa-cog" />
    </div>
  </div>
</template>
