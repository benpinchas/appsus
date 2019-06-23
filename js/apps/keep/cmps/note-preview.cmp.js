'use strict';

import {saveNotes} from '../services/keep.service.js'

export default {
  name: 'notePreview',
  template: `
        <div class="note-preview" v-if="note" :class="{'edit-context': isEditContext}">
              <div class="top"> 
                <img :src="logoSrc">
                <span class="time"> {{fDate}} </span>
              </div>
              <div class="main"> 



                 <!-- <div class="note-content" v-if="randomBoolean"> 
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                </div>  -->

                  <div class="note-content"> 
                      <p :contentEditable="isEditContext" class="body" ref="context">{{note.body}}</p>
                  </div>


                  
                  
  
              </div>
              <div class="edit-btns">
                <span class="left-container"> 
                  <i class="fas fa-edit" @click="editContext"></i>
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
      randomBoolean: Math.random() > 0.5,
      isEditContext: false,
    }
  },
  computed: {
    logoSrc() {
        return 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
    },
    fDate() {
      let date = new Date(this.note.createdAt);
      // new Date().toLocaleDateString();
      return date.toString().slice(16, 21); //+ '  ' + date.toLocaleDateString()
    },
  },
  methods: {
    editContext(ev) {
      console.log('editContext');
      this.isEditContext = !this.isEditContext;
      if (this.isEditContext) {
        setTimeout(() => {
          this.$refs.context.focus()
        },100)
        
      } else {
        this.note.body = this.$refs.context.textContent
        saveNotes()
      }
      // console.log(this.$refs.context.textContent);
      // this.note.body = this.$refs.context.textContent
      // saveNotes()
    },
    deleteThisNote() {
      console.log('deleted');
      // deleteEmail(this.email).then(() => {
      //   console.log('deleted');
      // });
    },
  },
  mounted() {
    // setInterval(() => console.log(this.note.body), 1000)
  }
};
