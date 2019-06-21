'use strict';

import {saveEmails} from '../services/email.service.js'

export default {
  name: 'emailDetails',
  template: `
        <div class="email-details" >
            <main>
                <div class="email-info"> 
                    <p class="contact">from: moshe@gmail.com </p>
                    <p class="contact">20:22 </p>
                </div>
                
                <h2 class="subject">Hello Subject </h2>
                <p class="body"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br><br>
                it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br><br>
                it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>

                <div class="replay-container">   
                    <p class="contact"> Replying to: moshe@gmail.com</p>
                        <textarea placeholder="Type your replay.." autofocus></textarea>
                        <button class="send-btn">Send</button>
                </div>
            </main>
        </div>
    `,
  props: ['email'],
  computed: {
   
  },
  methods: {
  }

};
