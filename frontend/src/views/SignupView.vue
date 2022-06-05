<script setup lang="ts">
</script>

<template>
  <div class="container">
    <input class="input" type="text" placeholder="Usertag...">
    <input class="input" type="email" placeholder="Email...">
    <input class="input" type="password" placeholder="Password...">
    <button class="button">Signup</button>
    <span class="text">I already have an account</span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;

  >* {
    margin: 0.25rem 0;
  }
}

.input {
  border: 0;
  outline: 0;
  border-bottom: 1px solid #000000;
}

.button {}

.text {
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #000000;
  }
}
</style>