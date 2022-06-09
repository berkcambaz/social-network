<script setup lang="ts">
import { api } from '@/api/api';
import { useUsers } from '@/stores/users';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ApiCode } from '../../../shared/types';

const router = useRouter();
const users = useUsers();

const usertagInput = ref<HTMLInputElement>();
const emailInput = ref<HTMLInputElement>();
const passwordInput = ref<HTMLInputElement>();
const signup = () => {
  if (!usertagInput.value || !emailInput.value || !passwordInput.value) return;
  const usertag = usertagInput.value.value;
  const email = emailInput.value.value;
  const password = passwordInput.value.value;
  users.signup(usertag, email, password);
}
</script>

<template>
  <div class="container">
    <input class="input" ref="usertagInput" type="text" placeholder="Usertag...">
    <input class="input" ref="emailInput" type="email" placeholder="Email...">
    <input class="input" ref="passwordInput" type="password" placeholder="Password...">
    <button class="button" @click="signup">Signup</button>
    <span class="text" @click="router.push('/login')">I already have an account</span>
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