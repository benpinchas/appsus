

export default {
    template: `
            <div class="note-content" :class="{'edit-context': isEditContext}">
            <i class="fas fa-edit" @click="editContext"></i>
                <p :contentEditable="isEditContext"  class="body" ref="context">{{data}}</p>
            </div>

    `,
    props:['data'],
    data() {
        return {
            isEditContext: false,
        }
    },
    methods: {
        editContext() {
            this.isEditContext = !this.isEditContext;
            if (this.isEditContext) {
              setTimeout(() => {
                this.$refs.context.focus()
              },1000)
              
            } else {
              this.data = this.$refs.context.textContent
              //saveNotes()
            }
          },
    }
}


