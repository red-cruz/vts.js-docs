<template>
  <pre ref="pre"><code :class="language"><slot></slot></code></pre>
</template>

<script setup>
import hljs from 'highlight.js'
import { ref, onMounted } from 'vue'

const pre = ref(null)

defineProps({
  language: { String }
})
onMounted(() => {
  const snippet = pre.value
  let code = snippet.getElementsByTagName('code')[0].innerText

  snippet.classList.add('hljs') // append copy button to pre tag

  snippet.innerHTML =
    '<button class="hljs-copy float-end rounded-0 p-1 px-2 btn btn-outline-primary mt-2 me-2" type="button">Copy</button>' +
    snippet.innerHTML // append copy button

  snippet.querySelector('.hljs-copy').addEventListener('click', async function () {
    this.blur()
    this.innerText = 'Copying...'
    await navigator.clipboard.writeText(code)
    this.innerText = 'Copied!'
    setTimeout(() => {
      this.innerText = 'Copy'
    }, 3000)
  })

  hljs.highlightAll()
})
</script>
