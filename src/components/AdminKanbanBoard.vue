<script lang="ts" setup>
import AdminKanbanCard1x1 from '@/components/AdminKanbanCard1x1.vue';
</script>

<template>
  <div class="mx-auto max-w-4xl grid lg:grid-cols-5 gap-2 p-2 grid-cols-1">
    <AdminKanbanCard1x1 icon="fa-user-clock" count="1">
        Pending Invites
        <div class="absolute left-2 bottom-2">
          <font-awesome-icon class="text-5xl text-orange-500" icon="fa-solid fa-user-clock" />
        </div>
        <div class="absolute right-4 bottom-2 text-3xl font-bold text-text">
          200
        </div>
      </AdminKanbanCard1x1>
      <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
        Paid, Not Arrived
        <div class="absolute left-2 bottom-2">
          <font-awesome-icon class="text-5xl text-blue-500" icon="fa-solid fa-user-tag" />
        </div>
        <div class="absolute right-4 bottom-2 text-3xl font-bold text-text">
          200
        </div>
      </AdminKanbanCard1x1>
      <div class="drop-shadow-smd bg-white rounded-lg col-span-2 row-span-2  h-full p-2">Pie Chart</div>
      <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
        <h4>Salesforce Users</h4>
        <div class="flex justify-evenly h-3/4 items-center text-2xl font-bold">
          <div>
            <h5 class="text-green-700">923</h5>
            <h6 class="text-xs text-green-700 text-center">Yes</h6>
          </div>
          <div>
            <h5 class="text-orange-700">295</h5>
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
          200
        </div>
      </AdminKanbanCard1x1>
      <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
        Arrived
        <div class="absolute left-2 bottom-2">
          <font-awesome-icon class="text-5xl text-green-600" icon="fa-solid fa-user-check" />
        </div>
        <div class="absolute right-4 bottom-2 text-3xl font-bold text-text">
          200
        </div>
      </AdminKanbanCard1x1>
      <AdminKanbanCard1x1 icon="fa-user-tag" count="1">
        <button class="mx-auto w-full hover:scale-105 transition-all">
          <h1 class="text-center font-semibold">Scan a Registree</h1>
          <font-awesome-icon class="text-5xl text-red-600 w-full text-center" icon="fa-solid fa-camera" />
        </button>
      </AdminKanbanCard1x1>
  </div>
</template>