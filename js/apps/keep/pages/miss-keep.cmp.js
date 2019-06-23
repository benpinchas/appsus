'use strict';

import keepService from '../services/keep.service.js';

// CMP
import addNote from '../cmps/add-note.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
  name: 'MissKeep',
  template: `
        <section class="miss-keep">
            <add-note></add-note>
            <note-list :notes="notes"></note-list>

        </section>
    `,
  data() {
    return {
      notes: null
    };
  },
  created() {
    keepService.query().then(notes => {
      this.notes = notes;
      console.log(this.notes);
    });
  },
  components: {
    noteList,
    addNote
  }
};
