'use strict';

import keepService from '../services/keep.service.js';

// CMP
import noteList from '../cmps/note-list.cmp.js';

export default {
  name: 'MissKeep',
  template: `
        <section class="miss-keep">
   
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
    noteList
  }
};
