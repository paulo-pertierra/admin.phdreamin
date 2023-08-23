<script lang="ts" setup>
import type { Status } from '@/types/registree.type';

const props = defineProps<{
  status: Status;
}>();
</script>

<template>
  <div class="flex items-center" v-if="status === 'PENDING'">
    <font-awesome-icon class="text-[6pt] px-1 text-orange-400" icon="fa-solid fa-circle" />PENDING
  </div>
  <div class="flex items-center" v-else-if="status === 'PAID'">
    <font-awesome-icon class="text-[6pt] px-1 text-blue-400" icon="fa-solid fa-circle" />PAID
  </div>
  <div class="flex items-center" v-else>
    <font-awesome-icon class="text-[6pt] px-1 text-green-400" icon="fa-solid fa-circle" />ATTENDED
  </div>
</template>
