'use strict';

// import emailPreview from './email-preview.cmp.js';

export default {
  name: 'noteList',
  template: `
        <section class="note-list">
            note
            <!-- <email-preview v-for="email in emails" :email="email" :key="email.id"></email-preview> -->
        </section>
    `,
  props: ['notes'],
  components: {
    // emailPreview
  }
};
