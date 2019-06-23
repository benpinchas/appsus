'use strict';

import { saveNotes, deleteNote } from '../services/keep.service.js';

export default {
  name: 'notePreview',
  template: `
        <div class="note-preview" v-if="note">
              <div class="top"> 
                <img :src="logoSrc">
                <span class="time"> {{fDate}} </span>
              </div>
              <div class="main"> 



                 <div class="note-content" v-if="randomBoolean"> 
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                </div> 

                  <div class="note-content" v-else> 
                      <p contentEditable class="body" ref="context" @keyup="editContext">{{note.body}}</p>
                  </div>


                  
                  
  
              </div>
              <div class="edit-btns">
                <span class="left-container"> 
                  <i class="fas fa-edit" @click="editNote"></i>
                  <i class="fas fa-flag"></i>
                  <i class="fas fa-palette"></i>
                </span>
                <span>
                    <i class="fas fa-trash" @click.stop="deleteThisNote"></i>
                </span>          
              </div>
              
        </div>
    `,
  props: ['note'],
  data() {
    return {
      randomBoolean: Math.random() > 0.5
    };
  },
  computed: {
    logoSrc() {
      return 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg';
    },
    fDate() {
      let date = new Date(this.note.createdAt);
      // new Date().toLocaleDateString();
      return date.toString().slice(16, 21); //+ '  ' + date.toLocaleDateString()
    }
  },
  methods: {
    editContext() {
      console.log('editContext');
      // console.log(this.$refs.context.textContent);
      this.note.body = this.$refs.context.textContent;
      saveNotes();
    },
    deleteThisNote() {
      deleteNote(this.note).then(() => {
        console.log('deleted');
      });
    },
    editNote() {
      console.log('editNote');
      this.editMode = !this.editMode;
      if (this.editMode) {
        // setTimeout(() => this.$refs.textarea.focus(), 100)
      }
    }
  },
  mounted() {
    // setInterval(() => console.log(this.note.body), 1000)
  }
};
