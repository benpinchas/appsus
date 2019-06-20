'use strict';

export default {
  name: 'navigator',
  template: `
    <div class="navigator">
        <button @click="toggleNavigationWindow"><i class="fas fa-th"></i></button>
        
        <div class="navigation-window" v-if="isOpen">
            <router-link exact to="/"><i class="fas fa-home"></i></router-link>
            <router-link  to="/email"><i class="fas fa-envelope-open-text"></i></router-link>
            <router-link  to="/keep"><i class="fas fa-sticky-note"></i></router-link>
        </div>    
        
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
    }
  }
};
