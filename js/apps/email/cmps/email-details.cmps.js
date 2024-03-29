'use strict';

import { saveEmails } from '../services/email.service.js';
import { getEmailById } from '../services/email.service.js';

let replayCmp = {
  template: `<div class="replay-cmp" :class="classObj">
                    <p class="top">
                      <span  class="from">
                        <i class="far fa-comment-dots" style="margin-right: 7px;"></i>
                        {{replay.author}}
                      </span>
                      <span class="time"> {{fDate}}</span>
                  </p>
                    <p class="replay-txt">{{replay.txt}} </p>
                    
                </div>`,
  props: ['replay'],
  data() {
    return {
      isNew: Date.now() - this.replay.time < 3000, 
    }
  },
  computed: {
    classObj() {
      return {
        'glow':  this.isNew
      }
    },
    fDate() {
      let date = new Date(this.replay.time);
      return date.toString().slice(16, 21); //+ '  ' + date.toLocaleDateString()
    }
  },
  mounted() {
    setInterval(() => {
        this.isNew = false;
    }, 2500);
  }
};

export default {
  name: 'emailDetails',
  template: `
        <div class="email-details" v-if="email">
            <main>
                <div class="email-info"> 
                    <p class="contact">from: {{email.contact.email}} </p>
                    <p class="contact">{{fDate}} </p>
                </div>
                
                <h2 class="subject">{{email.subject}}</h2>
                <p class="body"> 
                    {{email.body}}
                </p>
                
                <replay-cmp v-for="replay in email.replays" :replay="replay"></replay-cmp>
                
                <!-- v-on:keydown.enter="addreplay" -->
                <div class="replay-container" >   
                    <p class="contact"> replying to: {{email.contact.email}}</p>
                        <textarea ref="replayTextarea" placeholder="Enter your reply.." ></textarea>
                        <button class="send-btn" @click="addreplay">Send</button>
                </div>
            </main>
        </div>
    `,
  data() {
    return {
      email: null
    };
  },
  computed: {
    fDate() {
      let date = new Date(this.email.sentAt);
      new Date().toLocaleDateString();
      return date.toString().slice(16, 21); //+ '  ' + date.toLocaleDateString()
    }
  },
  methods: {
    addreplay() {
      let replayTextarea = this.$refs.replayTextarea;
      if (!replayTextarea.value) return;
      let replay = {
        author: 'me@gmail.com',
        txt: replayTextarea.value,
        time: Date.now()
      };
      this.email.replays.push(replay);
      saveEmails();
      replayTextarea.value = '';
      replayTextarea.focus();
    }
  },
  created() {
    console.log('Created');
    console.log(getEmailById(this.$route.params.emailId));
    getEmailById(this.$route.params.emailId).then(email => {
      if (!email.isRead) {
        email.isRead = true;
        saveEmails();
      }
      this.email = email;
    });
  },
  components: {
    replayCmp
  }
};
