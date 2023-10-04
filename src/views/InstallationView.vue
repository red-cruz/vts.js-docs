<template>
  <div class="p-5">
    <CdnInstallation />
    <NpmInstallation />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ScrollSpy from 'bootstrap/js/dist/scrollspy'
import CdnInstallation from '../components/installation/CdnInstallation.vue'
import NpmInstallation from '../components/installation/NpmInstallation.vue'

onMounted(() => {
  new ScrollSpy(document.body, {
    target: '#installation',
    smoothScroll: true
  })
})
</script>
