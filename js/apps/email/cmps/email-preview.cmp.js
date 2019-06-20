'use strict';


export default {
  name: 'emailList',
  template: `
        <div class="email-preview" v-bind:class="{'unread': !email.isRead}" v-if="email">
              <div class="name">
                  <span v-if="isIncomeMail" class="star-read-container">
                    <span @click="toggleStar">
                      <i v-if="email.isStarred" style="color:#f7d51c;" class="fas fa-star"></i>
                      <i v-else class="far fa-star" style="color:#b6b4b4"></i>
                    </span>  
                    
                    <span @click="toggleRead">
                      <i class="far fa-envelope-open" v-if="email.isRead"></i>
                      <i class="fas fa-envelope" v-else></i>
                    </span>
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
      return date.toString().slice(16, 21) + '  ' + date.toLocaleDateString()
    },
    isIncomeMail() {
      return this.$route.params.theFilter !== "sent";
    }
  },
  methods: {
    classObject () {
      return {
        'unread': !this.email.isRead,
        'unre': false,
      }
    },
    toggleStar() {
      this.email.isStarred = !this.email.isStarred
    },
    toggleRead() {
      this.email.isRead = !this.email.isRead
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