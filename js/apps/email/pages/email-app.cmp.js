// import emailHeader from '../cmps/email-header.cmp.js'
import emailService from '../services/email.service.js';

// CMPS
import emailList from '../cmps/email-list.cmp.js';
import emailMenu from '../cmps/email-menu.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
  name: 'emailApp',
  template: `
        <section class="email-app">
            <email-menu></email-menu>
            
            <main>
              <email-filter @set-filter="setFilter"></email-filter>
              
              <router-view v-if="emails" :emails="emailsForDisplay"></router-view>
            </main>
            
        </section>
    `,
  data() {
    return {
      emails: null,
      sent: false,
      filter: {
        readState: 'all',
        onlyStarred: false,
      }
    };
  },
  created() {
    emailService.query().then(emails => {
      this.emails = emails;
      this.setFilterByRoute()
    });
  },
  computed: {
    emailsForDisplay() {
      if (this.sent) {
        return this.emails.sent
      }

      let emails = this.emails.incomes.filter(email => {
        if (this.filter.onlyStarred) {
          return email.isStarred
        }
        else return email
      })

      if (this.filter.readState === 'all') {
        return emails
      }
      else if (this.filter.readState === 'read') {
        return emails.filter(email => email.isRead);
      }        
      else return emails.filter(email => !email.isRead);
    }
  },
  methods: {
    //TODO: set readState
    setFilter(filter) { //all , read, unread
      console.log('email App got the filter', filter);
      this.filter.readState = filter;
    },
    setFilterByRoute() {
      if (this.$route.params.theFilter === "sent") {
          this.sent = true
      }
      if (this.$route.params.theFilter === "starred") {
        this.sent = false
        this.filter.onlyStarred = true
      } else if (this.$route.params.theFilter === "inbox") {
        this.sent = false
          this.filter.onlyStarred = false
      }
    }
  },
  components: {
    emailList,
    emailMenu,
    emailFilter
  },
  watch:{
    $route (to, from){
       this.setFilterByRoute()
    }
} 
};
