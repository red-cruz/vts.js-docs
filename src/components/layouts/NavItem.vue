<template>
  <li class="nav-item" @click="$router.push(href)">
    <RouterLink :to="href" class="nav-link" :class="childClass" :active-class="activeClass">
      <slot></slot>
    </RouterLink>
  </li>
</template>

<script setup>
defineProps({
  href: {
    type: [Object, String],
    required: true
  },
  childClass: String,
  activeClass: {
    type: String,
    default: 'active'
  }
})
</script>

<style lang="scss" scoped></style>
