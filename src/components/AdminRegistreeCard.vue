<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import * as date from 'date-fns';

import type { Ref } from 'vue';
import type { Registree, Status } from '@/types/registree.type';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const registree: Ref<Registree | undefined> = ref();

onMounted(() => {
  axios.get(`/registree/${route.params.uuid}`).then((response) => {
    registree.value = response.data.data;
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
    return date.format(new Date(registree?.value?.createdAt), 'PPp');
  }
  return 'No date';
});

function submitNewRegistreeStatus(status: Status) {
  axios.put(`/registree/${registree.value?.uuid}?status=${status}`).then(() => {
    Swal.fire('Success', `User is successfully set to ${status}`);
    setTimeout(() => {
      router.push('/dashboard');
    }, 5000);
  });
}
</script>

<template>
  <div class="relative max-w-sm mx-auto shadow-2xl rounded-lg overflow-hidden">
    <div
      class="relative h-48"
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
    <div class="absolute left-1/2 rounded-full border-4 border-orange-500 -translate-x-1/2 -translate-y-1/2">
      <img src="https://placehold.co/120" class="rounded-full" alt="" />
    </div>
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
</template>
