<script lang="ts" setup>
defineProps({
  count: String,
  icon: String
})

</script>

<template>
  <div class="relative drop-shadow-smd bg-white rounded-lg h-24 p-1">
    <slot></slot>
  </div>
</template>