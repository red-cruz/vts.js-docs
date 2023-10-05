<template>
  <div class="d-lg-flex">
    <NavBar />
    <main class="container-fluid overflow-auto py-lg-3">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './layouts/NavBar.vue'
</script>

<style lang="scss" scoped></style>
