<template>
  <div class="d-lg-flex">
    <NavBar />
    <main class="container-fluid overflow-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './layouts/NavBar.vue'
</script>

<style lang="scss" scoped></style>
