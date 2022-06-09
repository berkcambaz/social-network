<script setup lang="ts">
import { useRouter } from 'vue-router';
import User from '../components/User.vue';
import PostLister from '../components/PostLister.vue';
import { useUsers } from '@/stores/users';

const users = useUsers();

</script>

<template>
  <User :userId="(users.$state.current as number)" />
  <PostLister />
</template>