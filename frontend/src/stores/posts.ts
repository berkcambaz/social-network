import { api } from "@/api/api";
import { defineStore } from "pinia";
import { ApiCode, type IPost } from "../../../shared/types";

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
    getAllPosts: (state) => state.entities,
    getPostById: (state) => {
      return (id: number) => state.entities[id]
    }
  },
  actions: {
    like(postId: number) {
      const post = this.$state.entities[postId];
      if (post) post.liked = !post.liked;
    },
    bookmark(postId: number) {
      const post = this.$state.entities[postId];
      if (post) post.bookmarked = !post.bookmarked;
    },
    async post(content: string) {
      const { data, err } = await api(ApiCode.PostPost, { content });
      if (!data || err) return;
      const post = data.post;
      this.$state.entities[post.id] = post;
      this.$state.ids.push(post.id);
    }
  }
})