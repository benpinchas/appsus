import homePage from './pages/home-page.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';

export default [
  { path: '/', component: homePage },
  { path: '/email', component: emailApp },
  { path: '/keep', component: keepApp }
  // { path: '/about', component: aboutCmp, children:
  //     [
  //         { path: 'vision', component: aboutVision },
  //         { path: 'team', component: aboutTeam },
  //     ]
  // },
  // { path: '/car', component: carApp },
  // { path: '/car/:theCarId', component: carDetails },
];
