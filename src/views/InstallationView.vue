<template>
  <div class="p-5">
    <div id="cdn">
      <a class="link-offset-2 link-underline link-underline-opacity-0 fs-4" href="#cdn"> CDN </a>
      <p v-for="w in 25" :key="w">...</p>
    </div>
    <div id="npm">
      <a class="link-offset-2 link-underline link-underline-opacity-0 fs-4" href="#npm"> NPM </a>
      <p v-for="w in 20" :key="w">...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ScrollSpy from 'bootstrap/js/dist/scrollspy'

onMounted(() => {
  new ScrollSpy(document.body, {
    target: '#installation',
    smoothScroll: true
  })
})
</script>
