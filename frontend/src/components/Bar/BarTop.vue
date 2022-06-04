<script setup lang="ts">
import IconLeft from "../Icon/IconLeft.vue";
import IconMenu from "../Icon/IconMenu.vue";
</script>

<template>
  <div class="bar">
    <IconLeft class="icon back" />
    <IconMenu class="icon menu" />
    <div class="route">Home</div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  width: 640px;
  height: 3rem;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #000000;
  background-color: #ffffff;

  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    width: 100%;
  }
}

.icon {
  position: absolute;
  padding: 0.5rem;
  box-sizing: content-box;
  cursor: pointer;

  &.back {
    left: 0
  }

  &.menu {
    right: 0;
  }
}

.route {
  margin-left: 3rem;
  font-size: 1.25rem;
}
</style>