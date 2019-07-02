import Vue from 'vue';
import CreatePost from '@/views/CreatePost';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CreatePost);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.h1').textContent)
      .toEqual('Hello World');
  });
});
