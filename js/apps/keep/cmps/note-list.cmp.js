'use strict';

import notePreview from './note-preview.cmp.js';

export default {
  name: 'noteList',
  template: `
        <section class="note-list">
            <note-preview v-for="note in notes" :note="note" :key=" note.id"></note-preview>
        </section>
    `,
  props: ['notes'],
  components: {
    notePreview
  }
};
