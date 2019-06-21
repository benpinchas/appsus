'use strict';

import emailPreview from './email-preview.cmp.js';

export default {
  name: 'emailList',
  template: `
        <section class="email-list" >
            <email-preview v-for="email in emails" :email="email" :key="email.id"></email-preview>
        </section>
    `,
  props: ['emails'],
  components: {
    emailPreview
  },
  mounted() {
    // this.emails
  }
};
