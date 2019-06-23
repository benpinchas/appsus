
import { addNote } from '../services/keep.service.js'

export default {
    template: `
        <section class="add-note">
            <!-- <div class="note-kinds"> 
                <i class="fas fa-font"></i>
                <i class="fab fa-youtube"></i>
                <i class="fas fa-image"></i>
                <i class="fas fa-list-ul"></i>
            <div> -->

            <div class="note-preview">
              <div class="top"> 
                <div class="note-kinds"> 
                    <i class="fas fa-font"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fas fa-image"></i>
                    <i class="fas fa-list-ul"></i>
                </div>
                <span class="time">Preview</span>
              </div>
              <div class="main"> 


                  <div class="note-content"> 
                    <p contentEditable class="body edit-context" ref="context" autofocus @keyup="addContext"></p>
                  </div> 
  
              </div>
              <div class="edit-btns ">
                <span class="left-container color-picker">
                  <i class="fas fa-palette"></i>
                  
                  <div style="text-align:center" class="dot-container">
                    <span class="dot pink"></span>
                    <span class="dot blue"></span>
                    <span class="dot green"></span>
                    <span class="dot gray picked"></span>
                    </div>
                </span>
                
                <button class="add-btn" @click="addNote">
                    <i class="fas fa-plus-circle" style="color:white; font-size: 14px;"></i>
                    Add 
                </button>          
              </div>
              
        </div>
        </section>
    `,
    data() {
        return {
            randomBoolean: Math.random() > 0.5,
            isEditContext: false,
            note: {
                id: Math.random() + '',
                data: '',
                isPinned: false,
                type: 'text', //image //todos //youtube //audio,
                color: 'whitesmoke',
                createdAt: Date.now()
            }
        }
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
        addContext() {
            this.note.data = this.$refs.context.textContent
        },
        addNote() {
            addNote(this.note);
            this.note = {
                id: Math.random() + '',
                data: '',
                isPinned: false,
                type: 'text', //image //todos //youtube //audio,
                color: 'whitesmoke',
                createdAt: Date.now()
            }
            this.$refs.context.textContent = ''
            this.$refs.context.focus()
        },

        editContext(ev) {
            console.log('editContext');
            this.isEditContext = !this.isEditContext;
            if (this.isEditContext) {
                setTimeout(() => {
                    this.$refs.context.focus()
                }, 1000)

            } else {
                this.note.body = this.$refs.context.textContent
                saveNotes()
            }
        },
        deleteThisNote() {
            deleteNote(this.note).then(() => {
                console.log('deleted');
            });
        },
    },
    mounted() {
        this.$refs.context.focus()
    }
}

