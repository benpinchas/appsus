'use strict';

// import {readEmailPercentage } from '../services/email.service.js';

export default {
  name: 'progressBar',
  template: `
          <div class="progress-bar" style="display:none;">
               <span>Progress Bar: {{readCount}} %</span>
          </div>
      `,
  // data() {
  //   return { percent: 0 };
  // },
  data() {
    return {
      readCount: 0,
    }
  },
  mounted() {
    // readEmailPercentage()
    //   .then((readCount) => {
    //     return this.readCount = readCount
    //   })
  }

};
