'use strict';

export default {
  template: `
        <section class="email-filter">
            <main>
                <div class="filter-btns-container"> 
                    <button ref='all' @click="emitFilter('all')" :disabled="sent">All</button>
                    <button ref='read' @click="emitFilter('read')" :disabled="sent">Read</button>
                    <button ref='unread' @click="emitFilter('unread')" :disabled="sent">Unread</button>
                </div>
                <div class="filter-search-container">
                  <input type="text" @input="searchedTxt" v-model="txt" placeholder="Search..."/>
                  <!-- {{filterBy.txt}} -->
                </div>
            </main>
        </section>
    `,
  props: ['sent'],
  data() {
    return {
      filterBy: 'all',
      currBtn: null,
      txt: ''
    };
  },
  methods: {
    emitFilter(filterBy) {
      this.currBtn.classList.remove('selected-btn');
      this.currBtn = this.$refs[filterBy];
      this.currBtn.classList.add('selected-btn');
      this.filterBy = filterBy;
      this.$emit('set-filter', this.filterBy);
    },
    searchedTxt() {
      this.$emit('searchTxt', this.txt);
    }
  },
  mounted() {
    this.currBtn = this.$refs.all;
    this.emitFilter(this.filterBy);
  }
};
