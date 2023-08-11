<script lang="ts" setup>
import AdminNavigationBar from '@/components/AdminNavigationBar.vue';
import AdminPageBody from '@/components/AdminPageBody.vue';
import AdminKanbanBoard from '@/components/AdminKanbanBoard.vue';

import AdminSectionLine from '@/components/AdminSectionLine.vue';

</script>

<template>
  <AdminNavigationBar />
  <AdminPageBody>
    <h1 class="text-2xl">Statistics</h1>
    <AdminKanbanBoard />
    <AdminSectionLine />
    <h1 class="text-2xl">Users</h1>
    <table class="w-full my-4">
      <thead class="text-sm text-left font-semibold">
        <td>FULL NAME</td>
        <td>COMPANY</td>
        <td>EMAIL ADDRESS</td>
        <td>CONTACT NUMBER</td>
        <td>DATE REGISTERED</td>
        <td>STATUS</td>
      </thead>
      <tbody class="text-left text-sm">
        <tr>
          <td>Tibig, Jummela Stefane</td>
          <td class="flex">
            <div class="relative bg-sky-600 text-zinc-50 rounded-md w-fit px-1 text-center mr-1">
              SF
            </div>
            Salesforce Inc.
          </td>
          <td><div class="w-48 truncate"><a class="underline" href="mailto:jummelastefane.tibig@bracketdevs.net">jummelastefane.tibig@bracketdevs.net</a></div></td>
          <td>+63 938 146 3754</td>
          <td>August 11, 2023 at 18:00</td>
          <td>
            <div class="px-1 bg-slate-700 text-zinc-50 rounded-lg flex items-center w-fit pr-2"><font-awesome-icon
                class="text-[6pt] px-1 text-sky-400" icon="fa-solid fa-circle" />PAID</div>
          </td>
        </tr>
        <tr>
          <td>Pertierra, Paulo Roman</td>
          <td class="flex">
            <div v-if="true" class="bg-sky-600 text-zinc-50 rounded-md w-fit px-1 text-center mr-1">
              SF
            </div>
            Calbona Holdings Inc.
          </td>
          <td><div class="w-48 truncate"><a class="underline" href="mailto:paulo.pertierra@bracketdevs.net">paulo.pertierra@bracketdevs.net</a></div></td>
          <td>+63 921 321 0266</td>
          <td>August 22, 2023 at 12:14</td>
          <td>
            <div class="px-1 pr-2 bg-slate-700 text-zinc-50 rounded-lg flex items-center w-fit"><font-awesome-icon
                class="text-[6pt] px-1 text-orange-400" icon="fa-solid fa-circle" />PENDING</div>
          </td>
        </tr>
        <tr>
          <td>De Guzman, Eric Brian</td>
          <td class="flex">
            <div v-if="true" class="bg-sky-600 text-zinc-50 rounded-md w-fit px-1 text-center mr-1">
              SF
            </div>
            Calbona Holdings Inc.
          </td>
          <td><div class="w-48 truncate"><a class="underline" href="mailto:deguzmaneric09@gmail.com">deguzmaneric09@gmail.com</a></div></td>
          <td>+63 949 483 3812</td>
          <td>August 17, 2023 at 17:48</td>
          <td>
            <div class="px-1 pr-2 bg-slate-700 text-zinc-50 rounded-lg flex items-center w-fit"><font-awesome-icon
                class="text-[6pt] px-1 text-green-400" icon="fa-solid fa-circle" />ARRIVED</div>
          </td>
        </tr>
        <tr>
          <td>Angud, Zedrict lois</td>
          <td class="flex">
            <div v-if="false" class="bg-sky-600 text-zinc-50 rounded-md w-fit px-1 text-center mr-1">
              SF
            </div>
            Calbona Holdings Inc.
          </td>
          <td><div class="w-48 truncate"><a class="underline" href="mailto:darkkazama24@gmail.com">darkkazama24@gmail.com</a></div></td>
          <td>+63 915 632 1512</td>
          <td>August 15, 2023 at 14:02</td>
          <td>
            <div class="px-1 pr-2 bg-slate-700 text-zinc-50 rounded-lg flex items-center w-fit"><font-awesome-icon
                class="text-[6pt] px-1 text-green-400" icon="fa-solid fa-circle" />ARRIVED</div>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminPageBody>
</template>