'use strict';

export default {
  name: 'emailList',
  template: `
        <div class="email-preview">
              {{email.body}}
        </div>
    `,
  props: ['email']
};
