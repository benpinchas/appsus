
import emailComposer from './email-composer.cmp.js'

export default {
    name: 'emailMenu',
    template: `
          <section class="email-menu">
                <main>
                  <email-composer></email-composer>
                  <router-link to="/email"><i class="fas fa-inbox"></i> Incoming</router-link>
                  <router-link to="/starred"><i class="fas fa-star"></i> Starred</router-link>
                  <router-link to="/sent"><i class="fas fa-paper-plane"></i> Sent</router-link>
                </main>
          </section>
      `,
      components: {
        emailComposer
      }
  };