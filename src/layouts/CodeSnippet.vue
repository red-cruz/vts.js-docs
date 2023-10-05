<template>
  <pre class="container mt-2 rounded"><code><slot></slot></code></pre>
</template>

<script setup>
import hljs from 'highlight.js'
import { onMounted } from 'vue'

onMounted(() => {
  const snippets = document.getElementsByTagName('pre')
  for (const snippet of snippets) {
    let code = snippet.getElementsByTagName('code')[0].innerText

    snippet.classList.add('hljs') // append copy button to pre tag

    snippet.innerHTML = '<button class="hljs-copy float-end">Copy</button>' + snippet.innerHTML // append copy button

    snippet.querySelector('.hljs-copy').addEventListener('click', async function () {
      this.innerText = 'Copying...'
      await navigator.clipboard.writeText(code)
      this.innerText = 'Copied!'
      setTimeout(() => {
        this.innerText = 'Copy'
      }, 1000)
    })
  }
  hljs.highlightAll()
})
</script>
