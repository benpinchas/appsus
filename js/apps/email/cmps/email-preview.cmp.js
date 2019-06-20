'use strict';


export default {
  name: 'emailList',
  template: `
        <div class="email-preview">
              <div class="name">
                  {{email.from.name}}
              </div>
              <div class="subject-body">
                <span class="subject">{{email.subject}}</span> 
                -
                <span class="body">{{email.body}}</span> 
              </div>
              <div class="time">
                {{fDate}}
              </div>
        </div>
    `,
  props: ['email'],
  computed: {
    fDate() {
      let date = new Date(this.email.sentAt)
      new Date().toLocaleDateString()
      return date.toString().slice(16,21) +'  '+ date.toLocaleDateString()
    }
  }

};


/*
 computed: {
    fDate() {
      return 5//new Date(this.email)
    }
  }
*/