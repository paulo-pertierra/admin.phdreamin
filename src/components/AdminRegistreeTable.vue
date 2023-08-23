<script lang="ts" setup>
import { onMounted, ref, type Ref, computed } from 'vue';
import { useRegistreeStore } from '@/stores';
import AdminRegistreeTableEntryVue from '@/components/AdminRegistreeTableEntry.vue';
import AdminRegistreeTablePagination from './AdminRegistreeTablePagination.vue';
import type { Registree } from '@/types/registree.type';

const registreeStore = useRegistreeStore();
onMounted(() => {
  registreeStore.getRegistrees(true);
});

const currentColumn = ref<keyof Registree>('createdAt');

const sortOrder: Ref<'asc' | 'desc'> = ref('desc');
function sortByColumn(column: keyof Registree, sort: 'asc' | 'desc') {
  registreeStore.queryParams.orderby = column;
  registreeStore.queryParams.order = sort;
  return;
}
function toggleSortOrder() {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
}

const caretDirection = computed(() => (sortOrder.value === 'asc' ? 'fa-caret-down' : 'fa-caret-up'));
</script>

<template>
  <div class="overflow-auto max-w-4xl mx-auto">
    <table class="my-4 min-w-max max-w-5xl table-fixed mx-auto">
      <thead class="text-sm text-left font-semibold border-b-2 leading-7">
        <td class="w-48">
          <button @click="toggleSortOrder(), sortByColumn((currentColumn = 'lastName'), sortOrder)">
            FULL NAME
            <font-awesome-icon
              v-show="currentColumn === 'lastName'"
              class="ml-2"
              :icon="'fa-solid ' + caretDirection"
            />
          </button>
        </td>
        <td class="w-32">
          <button @click="toggleSortOrder(), sortByColumn((currentColumn = 'company'), sortOrder)">
            COMPANY<font-awesome-icon
              v-show="currentColumn === 'company'"
              class="ml-2"
              :icon="'fa-solid ' + caretDirection"
            />
          </button>
        </td>
        <td class="inline-block mr-8 truncate">
          <button @click="toggleSortOrder(), sortByColumn((currentColumn = 'contactEmail'), sortOrder)">
            EMAIL ADDRESS
            <font-awesome-icon
              v-show="currentColumn === 'contactEmail'"
              class="ml-2"
              :icon="'fa-solid ' + caretDirection"
            />
          </button>
        </td>
        <td class="w-32 mr-4">
          <button @click="toggleSortOrder(), sortByColumn((currentColumn = 'contactNumber'), sortOrder)">
            PHONE
            <font-awesome-icon
              v-show="currentColumn === 'contactNumber'"
              class="ml-2"
              :icon="'fa-solid ' + caretDirection"
            />
          </button>
        </td>
        <td class="w-48">
          <button @click="toggleSortOrder(), sortByColumn((currentColumn = 'createdAt'), sortOrder)">
            DATE REGISTERED<font-awesome-icon
              v-show="currentColumn === 'createdAt'"
              class="ml-2"
              :icon="'fa-solid ' + caretDirection"
            />
          </button>
        </td>
        <td>
          <button @click="toggleSortOrder(), sortByColumn((currentColumn = 'status'), sortOrder)">
            STATUS
            <font-awesome-icon
              v-show="currentColumn === 'status'"
              class="ml-2"
              :icon="'fa-solid ' + caretDirection"
            />
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
