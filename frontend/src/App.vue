<script setup lang="ts">
import { RouterView } from 'vue-router'
import BarTop from './components/Bar/BarTop.vue'
import BarBottom from './components/Bar/BarBottom.vue'
</script>

<template>
  <BarTop />
  <div class="container">
    <RouterView />
  </div>
  <BarBottom />
</template>

<style lang="scss">
@import "normalize.css";

body {
  overflow-y: scroll;
  max-width: 640px;
  margin: 0 auto;

  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.container {
  padding: 3rem 1rem;
}
</style>
