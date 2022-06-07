<script setup lang="ts">
import { usePosts } from '@/stores/posts';
import { onMounted, ref } from 'vue';
import IconSend from './Icon/IconSend.vue';

const posts = usePosts();

const input = ref<HTMLInputElement | null>(null);
const text = ref({
  limit: 256,
  current: 0
}).value;

const oninput = () => {
  const elem = input.value;
  if (!elem) return;
  if (elem.value.length > text.limit) elem.value = elem.value.substring(0, text.limit);
  text.current = elem.value.length;
  elem.style.height = "0";
  elem.style.height = elem.scrollHeight + "px";
}

const send = () => {
  const elem = input.value;
  if (!elem) return;
  posts.post(elem.value);
  elem.value = "";
  text.current = 0;
  oninput();
}

onMounted(() => {
  oninput();
})
</script>

<template>
  <div class="container">
    <textarea class="input" ref="input" placeholder="What's on your mind?" @input="oninput"></textarea>
    <div class="bottom">
      <IconSend class="icon" @click="send" />
      {{ `${text.current}/${text.limit}` }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 1.5rem;
}

.input {
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0;
  resize: none;
  box-sizing: border-box;
  border-radius: 0;

  font-size: 1rem;
  border-bottom: 1px solid #000000;
  padding-bottom: 3px;

  overflow-wrap: break-word;
  overflow: hidden;
}

.bottom {
  display: flex;
  align-items: center;
}

.icon {
  cursor: pointer;
}
</style>