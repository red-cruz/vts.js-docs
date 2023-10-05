<template>
  <div class="mb-5">
    <h1>CDN</h1>
    <p class="fs-5">Include the Vts library in your HTML file using a CDN link:</p>
    <CodeSnippet
      >&lt;script
      src=&quot;https://unpkg.com/vts.js/dist/vts.min.js&quot;&gt;&lt;/script&gt;</CodeSnippet
    >
  </div>

  <div>
    <h1>NPM</h1>
    <p class="fs-5">
      If you are using a module bundler like Webpack or Rollup, you can install Vts from npm:
    </p>
    <CodeSnippet>npm i vts.js</CodeSnippet>
    <p class="fs-5">Import the library into your JavaScript file:</p>
    <CodeSnippet>import Vts from 'vts.js';</CodeSnippet>
  </div>
</template>

<script setup>
import CodeSnippet from '../layouts/CodeSnippet.vue'

// import { onMounted } from 'vue'
// import ScrollSpy from 'bootstrap/js/dist/scrollspy'

// onMounted(() => {
//   new ScrollSpy(document.body, {
//     target: '#installation',
//     smoothScroll: true
//   })
// })
</script>
