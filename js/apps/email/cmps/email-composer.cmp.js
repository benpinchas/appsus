'use strict';

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
                            <input type="text" placeholder="Subject"> 
                        </div>
                        <div class="body">
                            <textarea resizeable="false">
                            </textarea>
</div> 
                        <div class="send-container">
                            <button class="send-btn">Send</button>
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
        }
    }
};

