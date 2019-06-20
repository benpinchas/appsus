'use strict';

import appHeader from './cmps/app-header.cmp.js';
import theRoutes from './routes.js';

const myRouter = new VueRouter({ routes: theRoutes });

var app = new Vue({
  el: '#app',
  created() {
    console.log('App has been Created!');
  },
  template: `
        <div>
            <app-header></app-header>
            <router-view></router-view>
        </div>
    `,
  methods: {
    foo() {
      console.log('Got Foo');
    }
  },
  components: {
    appHeader
  },
  router: myRouter
});
