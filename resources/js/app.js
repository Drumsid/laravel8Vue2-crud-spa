require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('posts-index', require('./components/Posts/Index.vue').default);


const app = new Vue({
    el: '#app',
});
