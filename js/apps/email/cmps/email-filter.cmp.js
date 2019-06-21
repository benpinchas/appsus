'use strict';

export default {
  template: `
        <section class="email-filter">
            <main>
                <div class="filter-btns-container" v-show="isIncomeMail"> 
                    <button ref='all' @click="emitFilter('all')">All</button>
                    <button ref='read' @click="emitFilter('read')">Read</button>
                    <button ref='unread' @click="emitFilter('unread')">Unread</button>
                </div>
                <div class="sent-msg" v-if="!isIncomeMail">
                  Sent 
                </div>

                <div class="filter-search-container">
                  <input type="text" @input="searchedTxt" v-model="txt" placeholder="Search..."/>
                </div>

                <div class="sort-container select-style">
                  <select>
                    <option value="date">By Date</option>
                    <option value="title">By Title</option>
                  </select>
                  </div>
            </main>
        </section>
    `,
  data() {
    return {
      filterBy: 'all',
      currBtn: null,
      txt: ''
    };
  },
  computed: {
    isIncomeMail() {
      return this.$route.params.theFilter !== 'sent';
    }
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
