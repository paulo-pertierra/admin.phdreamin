<script lang="ts" setup>
import { computed } from 'vue';
import { format } from 'date-fns';
import { RouterLink } from 'vue-router';

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
    return format(new Date(props.registree.createdAt), 'Pp');
  }
  return 'No date';
});
</script>

<template>
  <tr>
    <td>
      <RouterLink class="hover:underline" :to="`/dashboard/registree/${registree.uuid}`">{{
        registreeFullName
      }}</RouterLink>
    </td>
    <td>
      <div
        v-show="registree.salesforceUser"
        class="inline h-fit bg-sky-600 text-zinc-50 rounded-md w-32 truncate pl-1 text-center mr-1"
      >
        SF
      </div>
      {{ registree.company }}
    </td>
    <td class="inline-block w-36 truncate">
      <a class="hover:underline text-xs" :href="`mailto:${registree.contactEmail}`">{{
        registree.contactEmail
      }}</a>
    </td>
    <td>{{ registree.contactNumber }}</td>
    <td>{{ readableRegistrationDate }}</td>
    <td>
      <div class="px-1 bg-slate-700 text-zinc-50 rounded-lg flex items-center w-fit pr-2 float-right">
        <AdminRegistreeTableEntryStatus :status="registree.status" />
      </div>
    </td>
  </tr>
</template>
