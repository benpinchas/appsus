'use strict';

// import miniPreview from './minified-email-preview.cmp.js';

export default {
  name: 'miniList',
  template: `
        <section class="mini-email-list" >
            <i class="fas fa-envelope"></i>
            <!-- <email-preview v-for="email in emails" :email="email" :key="email.id"></email-preview> -->
        </section>
    `,
  props: ['emails'],
  components: {
    // emailPreview
  },
  mounted() {

  }
}