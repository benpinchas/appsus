'use strict';

import {sendEmail} from '../services/email.service.js'

export default {
    name: 'emailComposer',
    template: `
    <!-- v-on:keyup.enter="sendEmail" -->
          <div class="email-composer">
               <button @click="toggleComposerWindow" class="compose-btn"><img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"/> Compose</button>

               <div class="composer-window" v-show="isOpen">
                    <div class="top">
                        <p>New Messeage</p> <i class="fas fa-times" @click="toggleComposerWindow" style="cursor:pointer"></i>
                    </div>
                    <main>
                        <div class="contact"> 
                            <input ref="emailInput" type="text" placeholder="Email Address" value="me@gmail.com"> 
                            <input ref="subject" type="text" placeholder="Subject"> 
                        </div>
                        <div class="body">
                            <textarea ref="body" resizeable="false">
                            </textarea>
</div> 
                        <div class="send-container">
                            <button class="send-btn" @click="sendEmail">Send</button>
                        </div>     
                    </main>      
                </div>
          </div>
      `,
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleComposerWindow() {
            this.isOpen = !this.isOpen;
            //TODO: in a cleaner way
            if (this.isOpen) {
                setTimeout(() => {
                    this.$refs.subject.focus()
                }, 100)
            }
        },
        sendEmail() {
            console.log('sendEmail');
            if (!this.$refs.subject.value || !this.$refs.body.value) return
            let email = {
                id: Math.random() + '',
                subject: this.$refs.subject.value,
                body: this.$refs.body.value,
                isRead: false,
                sentAt: Date.now(),
                contact: {
                  name: 'Me',
                  email: 'me@gmail.com',
                },
                isStarred: false,
                replays: []
              }
              sendEmail(email)
              this.toggleComposerWindow()
              this.$refs.subject.value = ''
              this.$refs.body.value = ''
              this.$router.push('/email/inbox')
              
        }
    }
};

