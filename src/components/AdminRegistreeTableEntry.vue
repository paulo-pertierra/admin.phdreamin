<script lang="ts" setup>
import { computed } from 'vue';
import * as date from 'date-fns';

import AdminRegistreeTableEntryStatus from './AdminRegistreeTableEntryStatus.vue';
import type { Registree } from '@/types/registree.type';

const props = defineProps<{
  registree: Registree;
}>();

const registreeFullName = computed(() => {
  return props.registree.lastName + ', ' + props.registree.firstName;
});

const readableRegistrationDate = computed(() => {
  if (props.registree.createdAt) {
    return date.format(new Date(props.registree.createdAt), 'PPp');
  }
  return 'No date';
});
</script>

<template>
  <tr>
    <td>{{ registreeFullName }}</td>
    <td class="flex">
      <div
        v-show="registree.salesforceUser"
        class="inline h-fit bg-sky-600 text-zinc-50 rounded-md w-fit px-1 text-center mr-1"
      >
        SF
      </div>
      <span v-show="registree.salesforceUserRole">{{ registree.salesforceUserRole }} at&nbsp;</span>
      {{ registree.company }}
    </td>
    <td>
      <div class="w-48 truncate">
        <a class="underline" :href="`mailto:${registree.contactEmail}`">{{ registree.contactEmail }}</a>
      </div>
    </td>
    <td>{{ registree.contactNumber }}</td>
    <td>{{ readableRegistrationDate }}</td>
    <td>
      <div class="px-1 bg-slate-700 text-zinc-50 rounded-lg flex items-center w-fit pr-2">
        <AdminRegistreeTableEntryStatus :status="registree.status" />
      </div>
    </td>
  </tr>
</template>
@/types/registree.type
