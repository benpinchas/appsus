'use strict';

import keepService from '../services/keep.service.js';

// CMP
import noteList from '../cmps/note-list.cmp.js';

export default {
  name: 'MissKeep',
  template: `
        <section class="miss-keep">
          <div>
            <h1>KEEP APP PAGE - COMING SOON...</h1>
            <!-- <img src="../../../../img/under-construction.jpg" /> -->
            <note-list :notes="notes"></note-list>
          </div>
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
