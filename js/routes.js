import homePage from './pages/home-page.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import keepApp from './apps/keep/pages/miss-keep.cmp.js';

import emailDetails from './apps/email/cmps/email-details.cmps.js'
import emailList from './apps/email/cmps/email-list.cmp.js'
export default [
  { path: '', component: homePage },
  { path: '/email/', component: emailApp, children: [
    {
      path: ':theFilter',
      component: emailList
    },
    {
      path: ':theFilter/read/:emailId',
      component: emailDetails
    },
    
  ]},

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
