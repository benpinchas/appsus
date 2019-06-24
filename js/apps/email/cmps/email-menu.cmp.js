import emailComposer from './email-composer.cmp.js';
import progressBar from './progress-bar.cmp.js';

export default {
  name: 'emailMenu',
  template: `
          <section class="email-menu">
                <main>
                  <email-composer></email-composer>
                  <router-link to="/email/inbox"><i class="fas fa-inbox"></i> Incoming</router-link>
                  <router-link to="/email/starred"><i class="fas fa-star"></i> Starred</router-link>
                  <router-link to="/email/sent"><i class="fas fa-paper-plane"></i> Sent</router-link>
                  <progress-bar :emails="emails"></progress-bar>
                </main>
          </section>
      `,
  components: {
    emailComposer,
    progressBar
  },
  props: ['emails']
};
