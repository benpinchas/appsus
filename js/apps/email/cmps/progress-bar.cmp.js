'use strict';

// import {readEmailPercentage } from '../services/email.service.js';

export default {
  name: 'progressBar',
  template: `
          <div class="progress-bar" style="" v-if="emails">
               <!-- <span>Progress Bar: {{readedPercent}} %</span> -->
               <div style="width:100%; background-color:#d6d6d6; border-radius: 5px;">
               <!-- {{readedPercent}} -->
                <div class="progress-line"
                style="background-color:#0084ff; padding: 2px;
                  border-radius: 5px; color:white;" :style="{transform: 'scaleX('+sacleX+')'}">
                  </div>
                </div>
          </div>
      `,
  props: ['emails'],
  computed: {
    readedPercent() {
        let readedCount = this.emails.incomes.filter(email => email.isRead)
        return parseInt(readedCount.length /  this.emails.incomes.length * 100)
    },
    sacleX() {
      let readedCount = this.emails.incomes.filter(email => email.isRead)
      return readedCount.length /  this.emails.incomes.length
    }
  }

};
