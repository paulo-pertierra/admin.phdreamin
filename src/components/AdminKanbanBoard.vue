<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { computed, ref, watch } from 'vue';
import { useRegistreeStore } from '@/stores';

import AdminKanbanCard1x1 from '@/components/AdminKanbanCard1x1.vue';
import VueApexChart from 'vue3-apexcharts';

const registreeStore = useRegistreeStore();

const nonSalesforceUsers = computed(() => {
  if (registreeStore.meta?.stats.totalCount && registreeStore.meta?.stats.salesforceUsers)
    return registreeStore.meta?.stats.totalCount - registreeStore.meta?.stats.salesforceUsers;
  return 0;
});

let chartOptions = {};

chartOptions = {
  chart: {
    id: 'vuechart-example'
  },
  labels: ['Pending', 'Paid', 'Attended'],
  colors: ['#f97316', '#3b82f6', '#16a34a']
};
const series = ref([0, 0, 0]);

watch(registreeStore, () => {
  series.value = [
    registreeStore.meta?.stats.pendingCount || 0,
    registreeStore.meta?.stats.paidCount || 0,
    registreeStore.meta?.stats.attendedCount || 0
  ];
});
</script>

<template>
  <div class="mx-auto max-w-4xl grid lg:grid-cols-5 gap-2 grid-cols-2 p-4">
    <AdminKanbanCard1x1 icon="fa-user-clock" count="1">
      Pending Invites
      <div class="absolute left-2 bottom-2">
        <font-awesome-icon class="text-5xl text-orange-500" icon="fa-solid fa-user-clock" />
      </div>
      <div class="absolute right-4 bottom-2 text-3xl font-bold text-text">
        {{ registreeStore.meta?.stats.pendingCount }}
      </div>
    </AdminKanbanCard1x1>
    <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
      Paid
      <div class="absolute left-2 bottom-2">
        <font-awesome-icon class="text-5xl text-blue-500" icon="fa-solid fa-user-tag" />
      </div>
      <div class="absolute right-4 bottom-2 text-3xl font-bold text-text">
        {{ registreeStore.meta?.stats.paidCount }}
      </div>
    </AdminKanbanCard1x1>
    <div class="drop-shadow-smd bg-white rounded-lg col-span-2 row-span-2 h-full p-2">
      Chart
      <div v-if="!registreeStore.isloading" class="h-fit">
        <VueApexChart height="140px" type="donut" :options="chartOptions" :series="series" />
      </div>
    </div>
    <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
      <h4>Salesforce Users</h4>
      <div class="flex justify-evenly h-3/4 items-center text-2xl font-bold">
        <div>
          <h5 class="text-green-700">{{ registreeStore.meta?.stats.salesforceUsers }}</h5>
          <h6 class="text-xs text-green-700 text-center">Yes</h6>
        </div>
        <div>
          <h5 class="text-orange-700">{{ nonSalesforceUsers }}</h5>
          <h6 class="text-xs text-orange-700 text-center">No</h6>
        </div>
      </div>
    </AdminKanbanCard1x1>
    <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
      Total Invites
      <div class="absolute left-2 bottom-2">
        <font-awesome-icon class="text-5xl text-yellow-500" icon="fa-solid fa-user-group" />
      </div>
      <div class="absolute right-4 bottom-2 text-3xl font-bold text-text">
        {{ registreeStore.meta?.stats.totalCount }}
      </div>
    </AdminKanbanCard1x1>
    <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
      Paid & Attended
      <div class="absolute left-2 bottom-2">
        <font-awesome-icon class="text-5xl text-green-600" icon="fa-solid fa-user-check" />
      </div>
      <div class="absolute right-4 bottom-2 text-3xl font-bold text-text">
        {{ registreeStore.meta?.stats.attendedCount }}
      </div>
    </AdminKanbanCard1x1>
    <AdminKanbanCard1x1 class="hover:scale-105 hover:bg-gray-100 transition-all" icon="fa-user-tag" count="1">
      <RouterLink to="/dashboard/scan" class="mx-auto w-full transition-all">
        <h1 class="text-center font-semibold">Scan a Registree</h1>
        <font-awesome-icon class="text-5xl text-red-600 w-full text-center" icon="fa-solid fa-camera" />
      </RouterLink>
    </AdminKanbanCard1x1>
  </div>
</template>
