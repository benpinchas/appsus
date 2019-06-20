'use strict';


export default {
  name: 'emailList',
  template: `
        <div class="email-preview">
              <div class="name">
                  <span @click="putStar" v-if="isIncomeMail">
                    <i v-if="email.isStarred" style="color:#f7d51c;" class="fas fa-star"></i>
                    <i v-else class="far fa-star" style="color:#b6b4b4"></i>
                  </span>
                  {{email.contact.name}}
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
    },
    isIncomeMail() {
      return this.$route.params.theFilter !== "sent";
    }
  },
  methods: {
    putStar() {
      this.email.isStarred = !this.email.isStarred
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