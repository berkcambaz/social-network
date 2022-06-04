<script setup lang="ts">
import { useUsers } from '@/stores/users';
import IconCalendar from './Icon/IconCalendar.vue';

const { userId } = defineProps<{ userId: number }>();
const users = useUsers();
const user = users.getUserById(userId);
</script>

<template>
  <div class="container">
    <div class="username">{{ user.name }}</div>
    <div class="usertag">@{{ user.tag }}</div>
    <div class="date">
      <IconCalendar />
      May 2022
    </div>
    <div>
      <span class="following">{{ user.followingCount }} following</span>
      <span class="followers">{{ user.followerCount }} followers</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 1.5rem 0;
  border-bottom: 1px solid #000000;
}

.username {
  font-size: 1.125rem;
}

.usertag {
  font-size: 0.875rem;
}

.date {
  display: flex;
  align-items: center;
}

.following {
  cursor: pointer;
  margin-right: 0.125rem;

  &:hover {
    border-bottom: 1px solid #000000;
  }
}

.followers {
  cursor: pointer;
  margin-left: 0.125rem;

  &:hover {
    border-bottom: 1px solid #000000;
  }
}
</style>