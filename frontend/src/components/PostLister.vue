<script setup lang="ts">
import { usePosts } from '@/stores/posts';
import Post from './Post.vue';

const posts = usePosts();

</script>

<template>
  <Post v-for="postId in posts.getAllPosts" :postId="postId" :key="postId" />
</template>