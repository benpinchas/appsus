import appNavigator from './navigator.cmp.js';
import miniList from '../apps/email/cmps/minified-email-list.cmp.js';

export default {
  name: 'appHeader',
  template: `
    <section class="app-header">
        <main>
          <div>
        <i class="fas fa-horse-head"></i>
        <span>Appsus</span>
        </div>
        <app-navigator></app-navigator>
        <mini-list></mini-list>
    </main>
    </section>
    `,
  components: {
    appNavigator,
    miniList
  }
};
