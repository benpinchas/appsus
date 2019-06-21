'use strict';

import {sendEmail} from '../services/email.service.js'

export default {
    name: 'emailComposer',
    template: `
          <div class="email-composer">
               <button @click="toggleComposerWindow" class="compose-btn"><img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"/> Compose</button>

               <div class="composer-window" v-show="isOpen">
                    <div class="top">
                        <p>New Messeage</p> <i class="fas fa-times" @click="toggleComposerWindow" style="cursor:pointer"></i>
                    </div>
                    <main>
                        <div class="contact"> 
                            <input ref="emailInput" type="text" placeholder="Email Address"> 
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
                    this.$refs.emailInput.focus()
                }, 100)
            }
        },
        sendEmail() {
            console.log('sendEmail');
            let email = {
                id: Math.random() + '',
                subject: this.$refs.subject.value,
                body: this.$refs.body.value,
                isRead: false,
                sentAt: Date.now(),
                contact: {
                  name: 'Me',
                  email: this.$refs.emailInput.value,
                },
                isStarred: false,
              }
              
              sendEmail(email)
        }
    }
};

