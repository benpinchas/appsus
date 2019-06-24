'use strict';

import notePreview from './note-preview.cmp.js';

export default {
  name: 'noteList',
  template: `
        <section class="note-list">
        <masonry class="mansory"
        :cols="{default: 3, 1000: 3, 800: 2, 550: 1}"
        :gutter="{default: '30px', 700: '15px'}"
          >
          <note-preview v-for="note in notes" :note="note" :key=" note.id"></note-preview>
        </masonry>
            
        </section>
    `,
  props: ['notes'],
  components: {
    notePreview
  }
};
