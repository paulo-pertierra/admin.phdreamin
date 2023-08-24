<script lang="ts" setup>
import AdminPageBody from '@/components/AdminPageBody.vue';
import AdminKanbanBoard from '@/components/AdminKanbanBoard.vue';
import AdminSectionLine from '@/components/AdminSectionLine.vue';
import AdminRegistreeTable from '@/components/AdminRegistreeTable.vue';
</script>

<template>
  <AdminPageBody>
    <h1 class="text-2xl pl-4 sm:pl-0">Statistics <span class="text-xs">(click to filter)</span></h1>
    <AdminKanbanBoard />
    <AdminSectionLine />
    <h1 class="text-2xl pl-4 sm:p-0">Users</h1>
    <AdminRegistreeTable />
  </AdminPageBody>
</template>
