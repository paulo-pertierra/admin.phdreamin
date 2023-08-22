<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { QrcodeStream } from 'vue3-qrcode-reader';

const router = useRouter();
function onDecode(decodedString: string) {
  if (decodedString) {
    router.push({ name: 'registree', params: { uuid: decodedString } });
  }
}
</script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <div class="h-64 w-96">
      <qrcode-stream @decode="onDecode" />
    </div>
  </div>
</template>
