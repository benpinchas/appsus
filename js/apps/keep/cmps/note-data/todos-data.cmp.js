'use strict';

let todo = {
  template: `
  <div>
    {{todo}}
  </div>
  `,
  props: ['todo']
};

// import todoData from './todo-data.cmp.js';

export default {
  name: 'todosData',
  template: `
          <div class="note-content" :class="{'edit-context': isEditContext}">
          <i class="fas fa-edit" @click="editContext"></i>
          <todo v-for="todo in data" :todo="todo" :key=" todo.id" v-if="todo"></todo>
          </div>

  `,
  props: ['data'],
  data() {
    return {
      isEditContext: false
    };
  },
  methods: {
    editContext() {
      this.isEditContext = !this.isEditContext;
      if (this.isEditContext) {
        setTimeout(() => {
          this.$refs.context.focus();
        }, 1000);
      } else {
        this.data = this.$refs.context.textContent;
        //saveNotes()
      }
    }
  },
  components: {
    todo
  }
};
