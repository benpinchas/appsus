'use strict';

// import { saveEmails, deleteEmail } from '../services/email.service.js';

export default {
  name: 'notePreview',
  template: `
        <div class="note-preview" @click="readNote" v-if="note">
              <div class="title">
                  {{note.title}}
              </div>
              <div class="body">
                {{note.body}}
              </div>
              <div class="time">
                {{fDate}}              
                <i class="fas fa-trash" @click.stop="deleteThisNote"></i>
              </div>
        </div>
    `,
  props: ['note'],
  computed: {
    fDate() {
      let date = new Date(this.note.createdAt);

      // new Date().toLocaleDateString();
      return date.toString().slice(16, 21); //+ '  ' + date.toLocaleDateString()
    }
  },
  methods: {
    deleteThisNote() {
      console.log('deleted');
      // deleteEmail(this.email).then(() => {
      //   console.log('deleted');
      // });
    },
    readNote() {
      console.log(this.$route.fullPath);
      this.$router.push(`${this.$route.fullPath}/read/${this.note.id}`);
    }
  }
};
