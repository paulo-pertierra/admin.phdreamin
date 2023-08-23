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
    <div class="overflow-auto max-w-4xl mx-auto">
      <table class="my-4 min-w-max max-w-5xl table-fixed mx-auto">
        <thead class="text-sm text-left font-semibold border-b-2 leading-7">
          <td class="w-48">FULL NAME</td>
          <td class="w-32">COMPANY</td>
          <td class="inline-block mr-8 truncate">EMAIL ADDRESS</td>
          <td class="w-32 mr-4">PHONE</td>
          <td class="w-48">DATE REGISTERED</td>
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
    </div>
</template>
