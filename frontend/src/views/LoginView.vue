<script setup lang="ts">
</script>

<template>
  <div class="container">
    <input class="input" type="text" placeholder="Usertag...">
    <input class="input" type="password" placeholder="Password...">
    <button class="button">Login</button>
    <span class="text">I don't have an account</span>
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
  border-radius: 0;
  outline: 0;
  border-bottom: 1px solid #000000;
}

.button {
  cursor: pointer;

  border: 0;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: #000000;
  color: #ffffff;
}

.text {
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #000000;
  }
}
</style>