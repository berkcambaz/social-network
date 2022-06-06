<script setup lang="ts">
import { usePosts } from '@/stores/posts';
import { useUsers } from '@/stores/users';
import IconHeart from './Icon/IconHeart.vue';
import IconBookmark from './Icon/IconBookmark.vue';
import { useRouter } from 'vue-router';

const { postId } = defineProps<{ postId: number }>();
const router = useRouter();
const posts = usePosts();
const users = useUsers();
const post = posts.getPostById(postId);
const user = users.getUserById(post.userId);

</script>

<template>
  <div class="container">
    <div class="top">
      <span class="user-info" @click="router.push(`/profile/${user.tag}`)">
        <span>{{ user.name }}</span>
        <span class=" user-tag">@{{ user.tag }}</span>
      </span>
      <span class="date">{{ post.date }}</span>
    </div>
    <div class="bottom">
      <div class="content">
        {{ post.content }}
      </div>
      <div class="reactions">
        <span class="reaction-count">16</span>
        <IconHeart class="reaction-icon" :class="{ active: post.liked }" @click="posts.like(post.id)" />
        <IconBookmark class="reaction-icon" :class="{ active: post.bookmarked }" @click="posts.bookmark(post.id)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 1.5rem 0;
  border-bottom: 1px solid #000000;

  &:last-child {
    border-bottom: 0;
  }
}

.top {}

.bottom {
  padding-left: 1rem;
}

.user-info {
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #000000;
  }
}

.user-tag {
  margin-left: 0.25rem;
}

.date {
  margin-left: 0.25rem;

  &:hover {
    border-bottom: 1px solid #000000;
  }
}

.content {
  margin: 0.25rem 0;
}

.reactions {
  display: flex;
  align-items: center;
}

.reaction-count {
  margin-right: 0.25rem;
}

.reaction-icon {
  cursor: pointer;

  &.active {
    fill: #000000;
  }
}
</style>