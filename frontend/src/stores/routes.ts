import { defineStore } from "pinia";

interface State {
  name: string;
  hideBackButton: boolean;
  hideBottomBar: boolean;
  needAuth: boolean;
}

export const useRoutes = defineStore("routes", {
  state: (): State => ({
    name: "",
    hideBackButton: false,
    hideBottomBar: false,
    needAuth: false
  })
});