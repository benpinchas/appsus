
export default {
    template: `
        <section class="add-note">
            <!-- <div class="note-kinds"> 
                <i class="fas fa-font"></i>
                <i class="fab fa-youtube"></i>
                <i class="fas fa-image"></i>
                <i class="fas fa-list-ul"></i>
            <div> -->

            <div class="note-preview" v-if="note" :class="{'edit-context': isEditContext}">
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



                 <!-- <div class="note-content" v-if="randomBoolean"> 
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                </div>  -->

                  <div class="note-content"> 
                        <p contentEditable class="body edit-context" ref="context">{{note.body}}</p>
                  </div> 
  
              </div>
              <div class="edit-btns">
                <span class="left-container">
                  <i class="fas fa-palette"></i>
                </span>
                
                <button class="add-btn" @click="addNote">
                    <i class="fas fa-plus-circle" style="color:white"></i>
                    Add 
                </button>          
              </div>
              
        </div>
        </section>
    `,
    data() {
      return {
        note: {
            id: Math.random() + '',
            title: 'First note',
            body: 'SSS',
            isPinned: false,
            createdAt: Date.now()
        },
        randomBoolean: Math.random() > 0.5,
        isEditContext: false,
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
        addNote() {
            console.log('addNote');
        },
      editContext(ev) {
        console.log('editContext');
        this.isEditContext = !this.isEditContext;
        if (this.isEditContext) {
          setTimeout(() => {
            this.$refs.context.focus()
          },1000)
          
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
      // setInterval(() => console.log(this.note.body), 1000)
    }
}

