<template>
  <li class="nav-item" @click="pushRoute($router.push, href)">
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

/**
 *
 * @param {Function} push
 * @param {{name: String, hash: String}} href
 */
function pushRoute(push, href) {
  push(href)
  const navbar = document.getElementById('navbarScroll')
  const shown = navbar.classList.contains('show')
  if (shown) {
    // get toggler
    const toggle = document.querySelector('[data-bs-target="#navbarScroll"]')
    toggle.dispatchEvent(new Event('click'))
  }
}
</script>

<style lang="scss" scoped></style>
