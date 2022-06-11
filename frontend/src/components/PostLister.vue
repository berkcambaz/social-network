<script setup lang="ts">
import { usePosts } from '@/stores/posts';
import { useUsers } from '@/stores/users';
import Post from './Post.vue';

const posts = usePosts();
const users = useUsers();

</script>

<template>
  <Post v-for="post in posts.getAllPosts" :post="post" :user="users.getUserById(post.userId)" :key="post.id" />
</template>