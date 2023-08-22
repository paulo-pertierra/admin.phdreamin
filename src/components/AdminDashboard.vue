<script lang="ts" setup>
import AdminPageBody from '@/components/AdminPageBody.vue';
import AdminKanbanBoard from '@/components/AdminKanbanBoard.vue';
import AdminSectionLine from '@/components/AdminSectionLine.vue';
import AdminRegistreeTable from '@/components/AdminRegistreeTable.vue';
</script>

<template>
  <AdminPageBody>
    <h1 class="text-2xl">Statistics</h1>
    <AdminKanbanBoard />
    <AdminSectionLine />
    <h1 class="text-2xl">Users</h1>
    <AdminRegistreeTable />
  </AdminPageBody>
</template>
