
import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'

export default [
    { path: '/', component: homePage },
    { path: '/email', component: emailApp },
    // { path: '/about', component: aboutCmp, children:
    //     [
    //         { path: 'vision', component: aboutVision },
    //         { path: 'team', component: aboutTeam },
    //     ] 
    // },
    // { path: '/car', component: carApp },
    // { path: '/car/:theCarId', component: carDetails },
]
