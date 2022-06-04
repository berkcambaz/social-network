import type { IPost } from "@/types/post";
import { defineStore } from "pinia";

interface State {
  entities: { [key: number]: IPost },
  ids: number[]
}

export const usePosts = defineStore("posts", {
  state: (): State => ({
    entities: {
      0: {
        id: 0,
        userId: 0,
        date: 1234567890,
        content: "Hello, world!",
        likeCount: 123,
        liked: true,
        bookmarked: true
      }
    },
    ids: [0]
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