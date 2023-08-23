<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useRegistreeStore } from '@/stores';
import { storeToRefs } from 'pinia';
import type { StoreGeneric } from 'pinia';
const registreeStore = useRegistreeStore();
const { meta } = storeToRefs<StoreGeneric>(registreeStore);

function switchPageBy(count: number) {
  if (registreeStore.queryParams.page! <= 1) {
    return;
  }
  if (registreeStore.queryParams.page! >= meta.value.pagination.pageCount) {
    return;
  }
  if (registreeStore.queryParams.page)
    registreeStore.queryParams.page = registreeStore.queryParams.page + count;
}

const page = ref(1);
function switchPageTo(newPage: number) {
  if (newPage && registreeStore.queryParams.page! <= 1) {
    page.value = 1;
    return;
  }
  if (newPage >= meta.value.pagination.pageCount) {
    page.value = meta.value.pagination.pageCount;
    return;
  }
  if (registreeStore.queryParams.page) registreeStore.queryParams.page = newPage;
}

watch(page, (page) => switchPageTo(page));
</script>

<template>
  <div class="w-fit mx-auto text-lg flex">
    <button @click="switchPageBy(-1)" class="p-2">
      <font-awesome-icon icon="fa-solid fa-caret-left" />
    </button>
    <div class="p-4">
      <input v-model="page" class="w-8 text-center" type="text" />
    </div>
    <button @click="switchPageBy(1)" class="p-2">
      <font-awesome-icon icon="fa-solid fa-caret-right" />
    </button>
    <div class="text-xs flex items-center pl-4">Pages: {{ meta?.pagination.pageCount }}</div>
  </div>
</template>
