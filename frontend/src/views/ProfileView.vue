<script setup lang="ts">
import { useRouter } from 'vue-router';
import User from '../components/User.vue';
import PostLister from '../components/PostLister.vue';

const router = useRouter();

</script>

<template>
  <User :userId="0" />
  <PostLister />
</template>