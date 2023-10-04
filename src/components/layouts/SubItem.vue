<template>
  <li class="nav-item" @click="$router.push(href)">
    <a :href="href.hash" class="nav-link">
      <slot></slot>
    </a>
  </li>
</template>

<script setup>
defineProps({
  href: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
