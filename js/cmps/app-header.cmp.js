import appNavigator from './navigator.cmp.js';
import miniList from '../apps/email/cmps/minified-email-list.cmp.js'

export default {
  name: 'appHeader',
  template: `
    <section class="app-header">
        <main>
        General Appsus header CMP
        <app-navigator></app-navigator>
        <!-- <mini-list></mini-list> -->
    </main>
    </section>
    `,
  components: {
    appNavigator,
    miniList
  }
};
