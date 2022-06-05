import type { IUser } from "@/types/user";
import { defineStore } from "pinia";

interface State {
  current: number | null;
  entities: { [key: number]: IUser };
  ids: number[];
}

export const useUsers = defineStore("users", {
  state: (): State => ({
    current: 0,
    entities: {
      0: {
        id: 0,
        name: "Berk Cambaz",
        tag: "berkcambaz",
        bio: "Hello, world!",
        date: 1234567890,
        followerCount: 123,
        followingCount: 123
      }
    },
    ids: [0]
  }),
  getters: {
    getUserById: (state) => {
      return (id: number) => state.entities[id]
    },
    getCurrentUser: (state) => state.current !== null ? state.entities[state.current] : null
  }
})