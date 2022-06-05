<script setup lang="ts">
import IconHome from "../Icon/IconHome.vue";
import IconUser from "../Icon/IconUser.vue";
import IconPencil from "../Icon/IconPencil.vue";
import IconSearch from "../Icon/IconSearch.vue";
import { useRouter } from "vue-router";
import { useUsers } from "@/stores/users";

const router = useRouter();
const users = useUsers();
</script>

<template>
  <div class="bar" v-if="!router.currentRoute.value.meta.hideBottomBar">
    <IconHome class="icon" @click="router.push('/home')" />
    <IconUser class="icon" @click="router.push(`/user/${users.getCurrentUser?.tag}`)" />
    <IconSearch class="icon" />
    <IconPencil class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.bar {
  width: 640px;
  height: 3rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #000000;
  background-color: #ffffff;

  @media (max-width: 640px) {
    width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  >* {
    margin: 0 1rem;
  }
}

.icon {
  cursor: pointer;
}
</style>