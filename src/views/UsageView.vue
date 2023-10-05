<template>
  <h1>Usage</h1>
  <ol class="fs-5 mt-3">
    <li>
      Add the novalidate, method, and action attributes to your form
      <CodeSnippet>
        &lt;form id=&quot;myForm&quot; method=&quot;POST&quot; action=&quot;/submit-url&quot;
        novalidate&gt; &lt;!-- Your form fields and submit button --&gt; &lt;/form&gt;
      </CodeSnippet>
    </li>
    <li>
      Initialize Vts and pass the form's id
      <CodeSnippet> new Vts('myForm'); </CodeSnippet>
    </li>
    <p class="fs-5">
      In the above example, we assume that you have a form with the ID myForm. Replace it with the
      ID of your actual form. The novalidate attribute on the form disables the browser's default
      form validation. This allows Vts to handle the validation instead.
    </p>
    <li>
      Optionally, configure the Vts options. You can set the action and request properties of the
      ajax object to specify the URL and additional request parameters.
      <CodeSnippet class="language-javascript">
        new Vts('myForm', { ajax: { action: '/default-submit-url', request: { method: 'POST',
        headers: { 'X-CSRF-TOKEN': document .querySelector('meta[name="csrf-token"]')
        .getAttribute('content'), }, }, }, });
      </CodeSnippet>
      <div class="alert alert-info mt-2" role="alert">
        <Icon icon="mdi:information-variant-circle-outline" height="25" />
        This configuration will not affect other instances of Vts.
      </div>
    </li>
  </ol>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import CodeSnippet from '../layouts/CodeSnippet.vue'
</script>
