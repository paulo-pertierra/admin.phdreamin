<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import type { Registree } from '@/types/registree';
const route = useRoute();

const registree: Ref<Registree | undefined> = ref();

onMounted(() => {
  axios.get(`/register/${route.params.uuid}`).then((response) => {
    registree.value = response.data.data;
  });
});
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-lg font-semibold">Registree Details</h1>
    <p>{{ registree }}</p>
  </div>
</template>
@/types/registree.type
