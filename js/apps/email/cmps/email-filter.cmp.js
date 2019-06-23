'use strict';

export default {
  template: `
        <section class="email-filter">
            <main v-if="isInEmailDetails">
                <p>
                  <i class="fas fa-chevron-left back-left-btn" @click="goBack"></i>
                  <!-- <p> Go back</p> -->
                </p>
                
            </main>

            <main v-show="!isInEmailDetails">
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
                  <select @change="setSortBy($event)">
                    <option value="date">By Date</option>
                    <option value="subject">By Subject</option>
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
    },
    isInEmailDetails() {
      if (this.$route.params.emailId) return true
      else return false;
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
    },
    setSortBy(ev) {
      this.$emit('setSortBy', ev.target.value)
    },
    goBack() {
      console.log('goBack');
      var searchTerm = '/read/';
      var indexOfFirst = this.$route.path.indexOf(searchTerm)
      let previousPath = this.$route.path.slice(0,indexOfFirst)
      this.$router.push(previousPath)
    }
  },
  mounted() {
    if (!this.isInEmailDetails) {
      this.currBtn = this.$refs.all;
      this.emitFilter(this.filterBy);
    }
  }
};
