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
              <!-- <div class="input-group"> -->
              <input
                type="search"
                name="search"
                class="form-control rounded-0"
                placeholder="Search"
                aria-label="Search"
                aria-desribedby="search"
                required
              />
              <!-- <button class="btn btn-outline-secondary rounded-0" type="submit" id="search">
                  <Icon icon="mdi:magnify" height="25" />
                </button>
              </div> -->
            </form>
          </li>
          <NavItem href="/">
            <Icon icon="mdi:book-open-variant" />
            Introduction
          </NavItem>
          <li class="nav-item">
            <NavItem href="/installation">
              <Icon icon="mdi:download" />
              Installation
            </NavItem>
            <ul class="navbar-nav ps-4" id="installation">
              <SubItem :href="{ name: 'installation', hash: '#CDN' }">CDN</SubItem>
              <SubItem :href="{ name: 'installation', hash: '#NPM' }">NPM</SubItem>
            </ul>
          </li>
          <li class="nav-item">
            <NavItem href="/configuration">
              <Icon icon="mdi:cog-outline" />
              Configuration
            </NavItem>
            <ul class="navbar-nav ps-4" id="configuration">
              <SubItem :href="{ name: 'configuration', hash: '#Ajax' }">Ajax</SubItem>
              <SubItem :href="{ name: 'configuration', hash: '#Class' }">Class</SubItem>
              <SubItem :href="{ name: 'configuration', hash: '#Halt' }">Halt</SubItem>
              <SubItem :href="{ name: 'configuration', hash: '#Handlers' }">Handlers</SubItem>
              <SubItem :href="{ name: 'configuration', hash: '#Listen' }">Listen</SubItem>
              <SubItem :href="{ name: 'configuration', hash: '#Message' }">Message</SubItem>
              <SubItem :href="{ name: 'configuration', hash: '#Rules' }">Rules</SubItem>
              <SubItem :href="{ name: 'configuration', hash: '#StopPropagation' }">
                StopPropagation
              </SubItem>
            </ul>
          </li>
          <li class="nav-item">
            <NavItem href="/api">
              <Icon icon="mdi:api" />
              API
            </NavItem>
            <ul class="navbar-nav ps-4" id="api">
              <SubItem :href="{ name: 'api', hash: '#Methods' }"> Methods </SubItem>
              <SubItem :href="{ name: 'api', hash: '#Properties' }"> Properties </SubItem>
            </ul>
          </li>
          <li class="nav-item">
            <NavItem href="/example">
              <Icon icon="mdi:test-tube" />
              Example
            </NavItem>
            <ul class="navbar-nav ps-4" id="example">
              <SubItem :href="{ name: 'example', hash: '#Swal' }"> Swal </SubItem>
              <SubItem :href="{ name: 'example', hash: '#Noty' }"> Noty </SubItem>
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
import SubItem from './SubItem.vue'
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
