
import emailHeader from '../cmps/email-header.cmp.js'

export default {
    name: 'emailApp',
    template: `
        <section class="email-app">
            <email-header></email-header>
            email App page
        </section>
    `,
    components: {
        emailHeader,
    }
}