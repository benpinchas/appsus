'use strict';

import emailService from '../services/email.service.js';

// CMPS
import emailList from '../cmps/email-list.cmp.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
  name: 'emailApp',
  template: `
        <section class="email-app">
            <email-menu :emails="emails"></email-menu>
            
            <main>
              <email-filter :emails="emails" @set-filter="setFilter" @setSortBy="setSortBy" @searchTxt="searchByTxt"></email-filter>  
              <router-view class="router-view"  v-if="emails" :emails="emailsForDisplay"></router-view>
            </main>
            
        </section>
    `,
  data() {
    return {
      emails: null,
      sent: false,
      sortBy: 'date', // 'date', 's'
      filter: {
        readState: 'all',
        onlyStarred: false,
        txt: ''
      }
    };
  },
  created() {
    if (!this.$route.params.theFilter) {
      this.$router.push('/email/inbox');
    }
    emailService.query().then(emails => {
      this.emails = emails;
      this.setFilterByRoute();
    });
  },
  computed: {
    filteredEmails() {
      if (this.sent) {
        return this.emails.sent.filter(email => {
          return email.subject
            .toLowerCase()
            .includes(this.filter.txt.toLowerCase());
        });
      }
      let emails = this.emails.incomes
        .filter(email => {
          return email.subject
            .toLowerCase()
            .includes(this.filter.txt.toLowerCase());
        })
        .filter(email => {
          if (this.filter.onlyStarred) {
            return email.isStarred;
          } else return email;
        });

      if (this.filter.readState === 'all') {
        return emails;
      } else if (this.filter.readState === 'read') {
        return emails.filter(email => email.isRead);
      } else return emails.filter(email => !email.isRead);
    },
    emailsForDisplay() {
      console.log('emailsForDisplay', this.sortBy);
      let emails = this.filteredEmails.sort((email1, email2) => {
        if (this.sortBy === 'subject') {
          console.log('SUBJECT SORT');
          if (email1.subject.toLowerCase() > email2.subject.toLowerCase()) return 1
          else if(email1.subject.toLowerCase() < email2.subject.toLowerCase()) return -1
          else return 0
        } else {
          console.log('DATE SORT');
          return email2.sentAt - email1.sentAt
        }
      })
      //TODO: why we need to filter so vue will re-render
      return emails.filter(email => email)
    }
  },
  methods: {
    //TODO: set readState
    setFilter(filter) {
      //all , read, unread
      console.log('email App got the filter', filter);
      this.filter.readState = filter;
    },
    setSortBy(sortBy) {
      console.log(sortBy);
      this.sortBy = sortBy;
      console.log(this.sortBy);
    },
    setFilterByRoute() {
      if (this.$route.params.theFilter === 'sent') {
        this.sent = true;
      }
      if (this.$route.params.theFilter === 'starred') {
        this.sent = false;
        this.filter.onlyStarred = true;
      } else if (this.$route.params.theFilter === 'inbox') {
        this.sent = false;
        this.filter.onlyStarred = false;
      }
    },
    searchByTxt(txt) {
      this.filter.txt = txt;
    }
  },
  components: {
    emailList,
    emailMenu,
    emailFilter
  },
  watch: {
    $route(to, from) {
      if (!this.$route.params.theFilter && !this.$route.params.emailId) {
        this.$router.push('/email/inbox');
      }
      this.setFilterByRoute();
    }
  },
  mounted() {
    // console.log(this.emailsForDisplay);
  }
};
