<template>
  <nav class="navbar navbar-expand-lg bg-dark-subtle sticky-top overflow-auto">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Vts.js</RouterLink>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        class="collapse navbar-collapse navbar-nav-scroll pe-lg-2 mt-2 mt-lg-0"
        id="navbarScroll"
      >
        <ul class="nav nav-underline flex-column">
          <li class="nav-item">
            <form class="d-flex" role="search">
              <div class="input-group">
                <input
                  type="text"
                  name="search"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-desribedby="button-addon2"
                  required
                />
                <button class="btn btn-outline-secondary p-auto" type="submit" id="button-addon2">
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
              <NavItem :href="{ name: 'installation', hash: '#cdn' }" active-class="">CDN</NavItem>
              <NavItem :href="{ name: 'installation', hash: '#npm' }" active-class="">NPM</NavItem>
            </ul>
          </li>
          <li class="nav-item">
            <NavItem href="/configuration">
              <i class="fa-solid fa-sliders"></i> Configuration
            </NavItem>
            <ul class="navbar-nav ps-4">
              <NavItem href="/configuration#ajax">Ajax</NavItem>
              <NavItem href="/configuration#class">Class</NavItem>
              <NavItem href="/configuration#class">Class</NavItem>
              <NavItem href="/configuration#class">Class</NavItem>
              <NavItem href="/configuration#class">Class</NavItem>
              <NavItem href="/configuration#class">Class</NavItem>
              <NavItem href="/configuration#class">Class</NavItem>
              <NavItem href="/configuration#class">Classa</NavItem>
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
}
</style>
