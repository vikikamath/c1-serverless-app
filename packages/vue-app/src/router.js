import Vue from 'vue';
import Router from 'vue-router';
import CreatePost from '@/views/CreatePost';
import ViewPost from '@/views/ViewPost';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'ViewPost',
    component: ViewPost,
  }, {
    path: '/post-new',
    name: 'CreatePost',
    component: CreatePost,
  }],
});
