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
              <email-filter></email-filter>
            <email-list :emails="emails"></email-list>
            <email-menu></email-menu>
        </section>
    `,
  data() {
    return {
      emails: null
    };
  },
  created() {
    emailService.query().then(emails => {
      this.emails = emails;
      console.log(this.emails);
    });
  },
  components: {
    emailList,
    emailMenu,
    emailFilter
  }
};
