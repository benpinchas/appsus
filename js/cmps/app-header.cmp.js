
import appNavigator from './navigator.cmp.js'


export default {
    name: 'appHeader',
    template: `
    <section class="app-header">
        <main>
        Appsus header CMP
        <app-navigator></app-navigator>
    </main>
    </section>
    `,
    components: {
        appNavigator,
    }
}