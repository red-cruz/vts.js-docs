<template>
  <div class="d-lg-flex">
    <nav-bar />
    <main class="container-fluid overflow-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/layouts/navbar.vue'
</script>

<style lang="scss" scoped></style>
