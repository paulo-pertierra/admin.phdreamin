<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router';
import { QrcodeStream } from 'vue3-qrcode-reader';

const router = useRouter();
function onDecode(decodedString: string) {
  if (decodedString) {
    router.push({ name: 'registree', params: { uuid: decodedString } });
  }
}
</script>

<template>
  <div class="min-h-[60vh] w-full flex items-center justify-center">
    <div class="shadow-xl">
      <RouterLink class="text-lg hover:underline" to="/dashboard"
        ><font-awesome-icon class="px-2" icon="caret-left" />Go Home</RouterLink
      >
      <div class="h-64 w-96 rounded-lg overflow-hidden">
        <qrcode-stream @decode="onDecode" />
      </div>
    </div>
  </div>
</template>
