'use strict';

// import miniPreview from './minified-email-preview.cmp.js';

export default {
  name: 'miniList',
  template: `
        <section class="email-list" >
            miniList miniList miniList miniList miniList
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