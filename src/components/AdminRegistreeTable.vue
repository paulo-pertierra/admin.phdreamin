<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRegistreeStore } from '@/stores';
import AdminRegistreeTableEntryVue from '@/components/AdminRegistreeTableEntry.vue';

const registreeStore = useRegistreeStore();
onMounted(() => {
  registreeStore.getRegistrees();
});
</script>

<template>
  <table class="w-full my-4">
    <thead class="text-sm text-left font-semibold border-b-2 leading-7">
      <td>FULL NAME</td>
      <td>COMPANY</td>
      <td>EMAIL ADDRESS</td>
      <td>CONTACT NUMBER</td>
      <td>DATE REGISTERED</td>
      <td>STATUS</td>
    </thead>
    <tbody class="text-left text-sm">
      <AdminRegistreeTableEntryVue
        v-for="registree in registreeStore.registrees"
        :key="registree?.uuid"
        :registree="registree"
      />
    </tbody>
  </table>
</template>
