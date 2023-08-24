<script lang="ts" setup>
import { onMounted, ref, type Ref, computed, type CreateAppFunction, watch } from 'vue';
import { useRegistreeStore } from '@/stores';
import AdminRegistreeTableEntryVue from '@/components/AdminRegistreeTableEntry.vue';
import AdminRegistreeTablePagination from './AdminRegistreeTablePagination.vue';
import type { Registree } from '@/types/registree.type';
import { storeToRefs } from 'pinia';

const registreeStore = useRegistreeStore();
onMounted(() => {
  registreeStore.getRegistrees();
});

const caretDirection = computed(() => registreeStore.queryParams.order === 'asc' ? 'fa-caret-down' : 'fa-caret-up');

const currentColumn = ref('createdAt');


function handleSort(column: keyof Registree) {
  registreeStore.queryParams.orderby = column;
  if (column === currentColumn.value) {
    registreeStore.queryParams.order = registreeStore.queryParams.order === 'asc' ? 'desc' : 'asc'
    return;
  }
  currentColumn.value = column;
  if (currentColumn.value === 'createdAt')
    registreeStore.queryParams.order ='desc'
  else 
    registreeStore.queryParams.order = 'asc'
}
</script>

<template>
  <div class="max-w-4xl mx-auto flex items-center justify-end">
    <button class="p-1.5 rounded text-xs border hover:bg-gray-200" @click="registreeStore.reset = true">Reset</button>
  </div>
  <div class="overflow-auto max-w-5xl mx-auto">
    <table class="my-4 min-w-max max-w-5xl table-fixed mx-auto">
      <thead class="text-sm text-left font-semibold border-b-2 leading-7">
        <td class="w-48">
          <button @click="handleSort('lastName')">
            FULL NAME
            <font-awesome-icon v-show="currentColumn === 'lastName'" class="ml-2" :icon="'fa-solid ' + caretDirection" />
          </button>
        </td>
        <td class="w-32">
          <button @click="handleSort('company')">
            COMPANY<font-awesome-icon v-show="currentColumn === 'company'" class="ml-2" :icon="'fa-solid ' + caretDirection" />
          </button>
        </td>
        <td class="inline-block mr-8 truncate">
          <button @click="handleSort('contactEmail')">
            EMAIL ADDRESS
            <font-awesome-icon v-show="currentColumn === 'contactEmail'" class="ml-2" :icon="'fa-solid ' + caretDirection" />
          </button>
        </td>
        <td class="w-32 mr-4">
          <button @click="handleSort('contactNumber')">
            PHONE
            <font-awesome-icon v-show="currentColumn === 'contactNumber'" class="ml-2" :icon="'fa-solid ' + caretDirection" />
          </button>
        </td>
        <td class="w-48">
          <button @click="handleSort('createdAt')">
            DATE REGISTERED<font-awesome-icon v-show="currentColumn === 'createdAt'" class="ml-2" :icon="'fa-solid ' + caretDirection" />
          </button>
        </td>
        <td>
          <button @click="handleSort('status')">
            STATUS
            <font-awesome-icon v-show="currentColumn === 'status'" class="ml-2" :icon="'fa-solid ' + caretDirection" />
          </button>
        </td>
      </thead>
      <tbody class="text-left text-sm">
        <AdminRegistreeTableEntryVue
          v-for="registree in registreeStore.registrees"
          :key="registree?.uuid"
          :registree="registree"
        />
      </tbody>
    </table>
  </div>
  <AdminRegistreeTablePagination />
</template>
