<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRegistreeStore } from '@/stores';
import { storeToRefs } from 'pinia';
import type { StoreGeneric } from 'pinia';
const registreeStore = useRegistreeStore();
const { meta } = storeToRefs<StoreGeneric>(registreeStore);

const page = ref(1);

function setPage(count: number) {
  page.value = page.value + count
}

watch(page, () => {
  if (page.value < meta.value.pagination.pageCount) page.value = 1;
  if (page.value > meta.value.pagination.pageCount) page.value = meta.value.pagination.pageCount;
  registreeStore.queryParams.page = page.value
})
</script>

<template>
  <div class="w-fit mx-auto text-lg flex">
    <button @click="setPage(-1)" class="p-2">
      <font-awesome-icon icon="fa-solid fa-caret-left" />
    </button>
    <div class="p-4">
      <input v-model="page" class="w-8 text-center" type="text" />
    </div>
    <button @click="setPage(1)" class="p-2">
      <font-awesome-icon icon="fa-solid fa-caret-right" />
    </button>
    <div class="text-xs flex items-center pl-4">Pages: {{ meta?.pagination.pageCount }}</div>
  </div>
</template>
