'use strict';

import { saveNotes, deleteNote } from '../services/keep.service.js';

import textData from './note-data/text-data.cmp.js'
import imageData from './note-data/image-data.cmp.js'

export default {
  name: 'notePreview',
  template: `
        <div class="note-preview" v-if="note" :style="{'background-color': note.color}">
              <div class="top"> 
                <i :class="iconClass"></i>
                <span class="time"> {{fDate}} </span>
              </div>
              <div class="main"> 


                  <component :is="type" :data="note.data"></component>
                  <!-- <text-data :data="note.data"></text-data>
                  <image-data :data="note.data"></image-data> -->
                
              </div>


              <div class="edit-btns">
                <span class="left-container">
                  <i class="fas fa-flag"></i>
                  <span class="color-picker">
                  <i class="fas fa-palette"></i>
                  
                  <div style="text-align:center" class="dot-container">
                    <span class="dot pink" @click="changeColor('#ffe4e8')"></span>
                    <span class="dot blue"  @click="changeColor('#e0e0ff')" ></span>
                    <span class="dot green" @click="changeColor('#deffde')"></span>
                    <span class="dot gray picked" @click="changeColor('whitesmoke')"></span>
                    </div>
                </span>
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
    iconClass() {
      return {
        'fab fa-youtube': this.note.type === 'video',
        'fas fa-image': this.note.type === 'image',
        'fas fa-font': this.note.type === 'text',
      }
    },
    type() {
      return this.note.type+'-data'
    },
    logoSrc() {
      return 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg';
    },
    fDate() {
      let date = new Date(this.note.createdAt);
      // new Date().toLocaleDateString();
      return date.toString().slice(16, 21); //+ '  ' + date.toLocaleDateString()
    }
  },
  components: {
    textData,
    imageData
  },
  methods: {
    changeColor(color) {
      console.log(color);
      this.note.color = color
      saveNotes()
    },
    deleteThisNote() {
      deleteNote(this.note).then(() => {
        console.log('deleted');
      });
    },
  },
  mounted() {
  }
};
