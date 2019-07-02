<template>
  <div>
    <b-card :title="post.title" :sub-title="subTitle">
      <b-card-text>{{ post.body }}</b-card-text>
      <div slot="footer">
        <small class="text-muted">Last updated on {{dateStr}}</small>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  computed: {
    subTitle() {
      return `This post was authored by: ${this.post.userId}`;
    },
    dateStr() {
      const then = Math.abs(Math.random() * Date.now() - 10000); // eslint-disable-line
      return new Date(then).toDateString();
    },
  },
  props: ['post'],
};
</script>

