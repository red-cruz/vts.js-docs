<template>
  <nav class="navbar navbar-expand-lg bg-dark-subtle sticky-top overflow-auto g-0">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand fw-bold fs-3">Vts.js</RouterLink>
      <div>
        <button
          class="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon="ep:menu" height="30" />
        </button>
      </div>
      <div
        class="collapse navbar-collapse navbar-nav-scroll pe-lg-2 mt-2 mt-lg-0"
        id="navbarScroll"
      >
        <ul class="nav nav-underline flex-column" style="--bs-nav-underline-gap: 1px">
          <li class="nav-item">
            <form class="d-flex" role="search">
              <div class="input-group">
                <input
                  type="search"
                  name="search"
                  class="form-control rounded-0"
                  placeholder="Search"
                  aria-label="Search"
                  aria-desribedby="search"
                  required
                />
                <button class="btn btn-outline-secondary rounded-0" type="submit" id="search">
                  <Icon icon="bi:search" />
                </button>
              </div>
            </form>
          </li>
          <NavItem href="/">Introduction</NavItem>
          <li class="nav-item m-0">
            <NavItem href="/installation">
              <i class="fa-solid fa-download"></i> Installation
            </NavItem>
            <ul class="navbar-nav ps-4" id="installation">
              <NavItem :href="{ name: 'installation', hash: '#CDN' }" active-class="">CDN</NavItem>
              <NavItem :href="{ name: 'installation', hash: '#NPM' }" active-class="">NPM</NavItem>
            </ul>
          </li>
          <li class="nav-item">
            <NavItem href="/configuration">
              <i class="fa-solid fa-sliders"></i> Configuration
            </NavItem>
            <ul class="navbar-nav ps-4">
              <NavItem href="/configuration#Ajax">Ajax</NavItem>
              <NavItem href="/configuration#Class">Class</NavItem>
              <NavItem href="/configuration#Halt">Halt</NavItem>
              <NavItem href="/configuration#Handlers">Handlers</NavItem>
              <NavItem href="/configuration#Listen">Listen</NavItem>
              <NavItem href="/configuration#Message">Message</NavItem>
              <NavItem href="/configuration#Rules">Rules</NavItem>
              <NavItem href="/configuration#StopPropagation">StopPropagation</NavItem>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import NavItem from './NavItem.vue'
</script>

<style lang="scss" scoped>
@media (min-width: 992px) {
  .navbar .container-fluid,
  .navbar-expand-lg .navbar-collapse,
  .navbar-expand-lg .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .navbar {
    height: 100vh;
    align-items: flex-start;
  }
  .navbar-brand {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
}
</style>
