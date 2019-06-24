'use strict';

export default {
  name: 'navigator',
  template: `
    <div class="navigator">
        <button @click="toggleNavigationWindow"><i class="fas fa-th"></i></button>
        
        <transition name="fade">
        <div class="navigation-window" v-if="isOpen" @click=" toggleNavigationWindow">
            <router-link exact to="/"><i class="fas fa-home"></i></router-link>
            <router-link  to="/email"><i class="fas fa-envelope-open-text"></i></router-link>
            <router-link  to="/keep"><i class="fas fa-sticky-note"></i></router-link>
        </div>    
        </transition>
    </div>
    `,
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleNavigationWindow() {
      this.isOpen = !this.isOpen;
    },
  }
};
