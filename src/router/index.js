import Vue from 'vue';
import VueRouter from 'vue-router';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/article',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Article.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;