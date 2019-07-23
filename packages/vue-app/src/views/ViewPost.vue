<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">User Posts</h1>
    <div v-if="loading" class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div
      v-if="error"
      id="notification"
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
      @click="onClose"
    >
      <strong>Whoops!</strong>
      {{ error }}
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <b-card-group v-else columns>
      <PostCard v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></PostCard>
    </b-card-group>
  </div>
</template>
<script>
import axios from "axios";

import PostCard from "./components/PostCard";

const POSTS = "POSTS";

export default {
  name: "ViewPost",
  components: {
    PostCard
  },
  async created() {
    this.fetchSaved();
    if (!this.posts.length) {
      this.loading = true;
      try {
        const { data } = await axios({
          method: "get",
          url: "/posts"
        });
        this.posts = data;
        this.saveData();
      } catch (error) {
        this.error = `Site is temporarily unavailable: ${error}`;
      } finally {
        this.loading = false;
      }
    }
  },
  methods: {
    fetchSaved() {
      try {
        const savedData = JSON.parse(sessionStorage.getItem(POSTS));

        if (savedData) {
          this.posts = savedData;
        }
      } catch (err) {
        console.error("No data or could not fetch from session", err);
      }
    },
    saveData() {
      try {
        sessionStorage.setItem(POSTS, JSON.stringify(this.posts));
      } catch (err) {
        console.error("Error saving ", err);
      }
    },
    onClose() {
      this.error = "";
    }
  },
  data() {
    return {
      loading: false,
      posts: [],
      error: "" // eslint-disable-next-line
    };
  }
};
</script>
