import { defineStore } from "pinia";
import type { IUser } from "../../../shared/types";

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
  }
})