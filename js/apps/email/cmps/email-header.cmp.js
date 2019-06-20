
import appNavigator from '../../../cmps/navigator.cmp.js'


export default {
    name: 'appHeader',
    template: `
    <section class="email-header">
        <main>
        Email header CMP
        <app-navigator></app-navigator>
    </main>
    </section>
    `,
    components: {
        appNavigator,
    }
}