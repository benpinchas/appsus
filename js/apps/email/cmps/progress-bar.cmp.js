'use strict';

// import {readEmailPercentage } from '../services/email.service.js';

export default {
  name: 'progressBar',
  template: `
          <div class="progress-bar" style="" v-if="emails">
               <span>Progress Bar: {{readedPercent}} %</span>
          </div>
      `,
  props: ['emails'],
  computed: {
    readedPercent() {
        let readedCount = this.emails.incomes.filter(email => email.isRead)
        return parseInt(readedCount.length /  this.emails.incomes.length * 100)
    }
  }

};
