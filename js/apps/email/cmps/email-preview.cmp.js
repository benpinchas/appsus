'use strict';

import { saveEmails, deleteEmail } from '../services/email.service.js';

export default {
  name: 'emailPreview',
  template: `
        <div class="email-preview" @click="readEmail" v-bind:class="{'unread': isIncomeMail && !email.isRead}" v-if="email">
              <div class="name">
                  <span v-if="isIncomeMail" class="star-read-container">
                    <span @click.stop="toggleStar">
                      <i v-if="email.isStarred" style="color:#f7d51c;" class="fas fa-star"></i>
                      <i v-else class="far fa-star" style="color:#b6b4b4"></i>
                    </span>  
                    
                    <span @click.stop="toggleRead">
                      <i class="far fa-envelope-open" v-if="email.isRead" style="color:#949494;"></i>
                      <i class="fas fa-envelope" v-else></i>
                    </span>
                </span>
                  {{email.contact.name}}
              </div>
              <div class="subject-body">
                <span class="subject">{{fSubject}}</span> 
                -
                <span class="body">{{fBody}}</span> 
              </div>
              <div class="time">
                {{fDate}}
                <i class="fas fa-trash" style="margin-left:17px; color:#b7b7b7" @click.stop="deleteThisEmail"></i>
              </div>
        </div>
    `,
  props: ['email'],
  computed: {
    fBody() {
      if (this.email.body.length > 14) {
        return this.email.body.slice(0, 14) + '..';
      } else {
        return this.email.body;
      }
    },
    fSubject() {
      if (this.email.subject.length > 14) {
        return this.email.subject.slice(0, 14) + '..';
      } else {
        return this.email.subject;
      }
    },
    fDate() {
      let date = new Date(this.email.sentAt);
      new Date().toLocaleDateString();
      return date.toString().slice(16, 21); //+ '  ' + date.toLocaleDateString()
    },
    isIncomeMail() {
      return this.$route.params.theFilter !== 'sent';
    }
  },
  methods: {
    deleteThisEmail() {
      deleteEmail(this.email).then(() => {
        console.log('deleted');
      });
    },
    toggleStar() {
      this.email.isStarred = !this.email.isStarred;
      saveEmails();
    },
    toggleRead() {
      this.email.isRead = !this.email.isRead;
      saveEmails();
    },
    readEmail() {
      console.log(this.$route.fullPath);
      this.$router.push(`${this.$route.fullPath}/read/${this.email.id}`);
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
