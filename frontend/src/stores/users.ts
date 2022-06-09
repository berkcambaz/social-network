import { api } from "@/api/api";
import { defineStore } from "pinia";
import { ApiCode, type IUser } from "../../../shared/types";

interface State {
  current: number | null;
  entities: { [key: number]: IUser };
  ids: number[];
}

export const useUsers = defineStore("users", {
  state: (): State => ({
    current: null,
    entities: {},
    ids: []
  }),
  getters: {
    getUserById: (state) => {
      return (id: number) => state.entities[id]
    },
    getCurrentUser: (state) => state.current !== null ? state.entities[state.current] : null
  },
  actions: {
    async signup(usertag: string, email: string, password: string) {
      const { data, err } = await api(ApiCode.Signup, { usertag, email, password });
      if (err || !data) return;
      this.$state.current = data.id;
    },
    async login(usertag: string, password: string) {
      const { data, err } = await api(ApiCode.Login, { usertag, password });
      if (err || !data) return;
      this.$state.current = data.id;
    },
    async logout() {
      const { data, err } = await api(ApiCode.Logout, {});
      if (err || !data) return;
      this.$state.current = null;
    },
    async auth() {
      const { data, err } = await api(ApiCode.Auth, {});
      if (err || !data) return;
      this.$state.current = data.id;
    }
  }
})