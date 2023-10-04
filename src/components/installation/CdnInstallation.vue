<template>
  <div id="CDN">
    <a class="link-offset-2 link-underline link-underline-opacity-0 fs-4" href="#CDN"> CDN </a>
    <pre
      class="container mt-2 rounded"
    ><code class="" id="code">&lt;script src=&quot;https://unpkg.com/vts.js/dist/vts.min.js&quot;&gt;&lt;/script&gt;</code></pre>
  </div>
</template>

<script setup>
import hljs from 'highlight.js'
import { onMounted } from 'vue'

onMounted(() => {
  // document.querySelectorAll('code').forEach(function (element) {
  //   element.innerHTML = element.innerHTML
  //     .replace(/&/g, '&amp;')
  //     .replace(/</g, '&lt;')
  //     .replace(/>/g, '&gt;')
  //     .replace(/"/g, '&quot;')
  //     .replace(/'/g, '&#039;')
  // })
  // const test = document.getElementById('defaultForm')
  // document.getElementById('code').textContent = test.outerHTML

  hljs.highlightAll()
  var snippets = document.getElementsByTagName('pre')
  var numberOfSnippets = snippets.length
  for (var i = 0; i < numberOfSnippets; i++) {
    let code = snippets[i].getElementsByTagName('code')[0].innerText

    snippets[i].classList.add('hljs') // append copy button to pre tag

    snippets[i].innerHTML = '<button class="hljs-copy">Copy</button>' + snippets[i].innerHTML // append copy button

    snippets[i].getElementsByClassName('hljs-copy')[0].addEventListener('click', function () {
      this.innerText = 'Copying..'
      navigator.clipboard.writeText(code)
      this.innerText = 'Copied!'
      let button = this
      setTimeout(function () {
        button.innerText = 'Copy'
      }, 1000)
    })
  }
})
</script>

<style lang="scss">
@import url('../../assets/scss/app.scss');
.hljs-copy {
  float: right;
  cursor: pointer;
}
</style>
