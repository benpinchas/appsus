'use strict';

import { query, readEmailPercentage } from '../services/email.service.js';

export default {
  name: 'progressBar',
  template: `
          <div class="progress-bar">
               <span>Progress Bar: {{readMailsPercent}} %</span>
          </div>
      `,
  // data() {
  //   return { percent: 0 };
  // },
  computed: {
    readMailsPercent() {
      // var length = 0;
      // query().then(emails => {
      //   length = emails.incomes.length;
      //   console.log('inside then', length);
      //   return length;
      // });
      // console.log('after then', length);
      // return length;
      // return readEmailPercentage().then(readEmailsPercent => {
      //   console.log('read mails percentage', readEmailsPercent);
      //   this.percent = readEmailsPercent;
      // });
    }
  }
};
