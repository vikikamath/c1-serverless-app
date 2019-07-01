<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">User Posts</h1>
    <b-card-group columns>
      <PostCard v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></PostCard>
    </b-card-group>
  </div>
</template>
<script>
import PostCard from "./components/PostCard";
import posts from "../../data/posts.json";

export default {
  name: "ViewPost",
  components: {
    PostCard
  },
  data() {
    return {
      posts: posts // eslint-disable-next-line
    };
  }
};
</script>
