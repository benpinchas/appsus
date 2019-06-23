
import { addNote } from '../services/keep.service.js'

export default {
    template: `
        <section class="add-note">
            <div class="note-preview" :style="{'background-color': note.color}">
              
              <div class="top"> 
                    <div class="note-kinds"> 
                        <i ref="text" class="fas fa-font" @click="changeNoteKind('text')"></i>
                        <i ref="video" class="fab fa-youtube"  @click="changeNoteKind('video')"></i>
                        <i ref="image" class="fas fa-image"  @click="changeNoteKind('image')"></i>
                        <i ref="todos" class="fas fa-list-ul"  @click="changeNoteKind('todos')"></i>
                    </div>
                    <span class="time">Preview</span>
              </div>
              
              <div class="main"> 
                  <div class="note-content"> 
                      <p style="margin: 0;">{{directions}}</p>
                    <p contentEditable class="body edit-context" ref="context" autofocus @keyup="addContext"></p>
                  </div> 
              </div>
              
              <div class="edit-btns ">
                <span class="left-container color-picker">
                  <i class="fas fa-palette"></i>
                  
                  <div style="text-align:center" class="dot-container">
                  <span class="dot pink" @click="changeColor('#ffe4e8')"></span>
                    <span class="dot blue"  @click="changeColor('#e0e0ff')" ></span>
                    <span class="dot green" @click="changeColor('#deffde')"></span>
                    <span class="dot gray picked" @click="changeColor('whitesmoke')"></span>
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
            gIcon: null,
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
        directions() {
            if (this.note.type === 'text') return 'Insert Plain Text'
            else if (this.note.type === 'image') return 'Insert Image URL'
            else if (this.note.type === 'video') return 'Insert Youtube Link'
            else if (this.note.type === 'todos') return 'Type your Todos seperated by commas'
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
    methods: {
        changeColor(color) {
            console.log(color);
            this.note.color = color;
          },
        changeNoteKind(type){
            if (this.gIcon) {
                this.gIcon.classList.remove('selected')
            }
            this.gIcon = this.$refs[type]
            this.gIcon.classList.add('selected')
            this.note.type = type
            
            this.$refs.context.placeholder ="AAAA"
        },
        addContext() {
            this.note.data = this.$refs.context.textContent
        },
        addNote() {
            if (this.note.type === 'todos') {
                let todosTxts = this.$refs.context.textContent.split(',')
                todosTxts = todosTxts.filter(todoTxt => todoTxt)
                let todos = todosTxts.map(todoTxt => {
                        return {
                            txt: todoTxt,
                            isDone: false,
                            id: Math.random()+''
                        }   
                })
                this.note.data = todos;
            }
            addNote(this.note);
            this.note = {
                id: Math.random() + '',
                data: '',
                isPinned: false,
                type: 'text', //image //todos //youtube //audio,
                color: 'whitesmoke',
                createdAt: Date.now()
            }
            this.changeNoteKind('text')
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
        this.changeNoteKind('text')
    }
}

