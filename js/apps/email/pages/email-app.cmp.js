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
              <email-list :emails="emailsForDisplay"></email-list>
            </main>
            
        </section>
    `,
  data() {
    return {
      emails: null,
      filter: 'all'
    };
  },
  created() {
    emailService.query().then(emails => {
      this.emails = emails;
    });
  },
  computed: {
    emailsForDisplay() {
      if (this.filter === 'all') return this.emails;
      else if (this.filter === 'read')
        return this.emails.filter(email => email.isRead);
      else return this.emails.filter(email => !email.isRead);
    }
  },
  methods: {
    setFilter(filter) {
      console.log('email App got the filter', filter);
      this.filter = filter;
    }
  },
  components: {
    emailList,
    emailMenu,
    emailFilter
  }
};
