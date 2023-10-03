<template>
  <div class="about">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/installation">About</RouterLink>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
