// import emailHeader from '../cmps/email-header.cmp.js'
import emailService from '../services/email.service.js';

// CMP
import emailList from '../cmps/email-list.cmp.js';

export default {
  name: 'emailApp',
  template: `
        <section class="email-app">
            <email-list :emails="emails"></email-list>
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
    emailList
  }
};
