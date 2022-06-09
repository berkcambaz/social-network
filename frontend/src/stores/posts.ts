import { defineStore } from "pinia";
import type { IPost } from "../../../shared/types";

interface State {
  entities: { [key: number]: IPost },
  ids: number[]
}

export const usePosts = defineStore("posts", {
  state: (): State => ({
    entities: {},
    ids: []
  }),
  getters: {
    getAllPosts: (state) => state.ids,
    getPostById: (state) => {
      return (id: number) => state.entities[id]
    }
  },
  actions: {
    like: function (postId: number) {
      const post = this.$state.entities[postId];
      if (post) post.liked = !post.liked;
    },
    bookmark: function (postId: number) {
      const post = this.$state.entities[postId];
      if (post) post.bookmarked = !post.bookmarked;
    },
    post: function (content: string) {

    }
  }
})