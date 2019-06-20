'use strict';

export default {
  template: `
        <section class="email-filter">
            <main>
                <div class="filter-btns-container"> 
                    <button ref='all' @click="emitFilter('all')">All</button>
                    <button ref='read' @click="emitFilter('read')">Read</button>
                    <button ref='unread' @click="emitFilter('unread')">Unread</button>
                </div>
            </main>
        </section>
    `,
  data() {
    return {
      filterBy: 'all',
      currBtn: null
    };
  },
  methods: {
    emitFilter(filterBy) {
      this.currBtn.classList.remove('selected-btn');
      this.currBtn = this.$refs[filterBy];
      this.currBtn.classList.add('selected-btn');
      this.filterBy = filterBy;
      this.$emit('set-filter', this.filterBy);
    }
  },
  mounted() {
    this.currBtn = this.$refs['all'];
    this.emitFilter(this.filterBy);
  }
};
