// import appHeader from '../cmps/app-header.cmp.js'

export default {
  name: 'homePage',
  template: `
        <section class="home-page ">
            <!-- <app-header></app-header> -->
            <main>
              <section class="app-present">
                <img class="mockup-ios" src="https://i.ibb.co/HNvbSdL/smartmockups-jxacqbj3.png"/>
                <div class="secondary">
                      <span>
                        <h1>All your Emails in one place </h1>
                        <p> 
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </span>
                      <button @click="goToMailApp">Take Me There <i class="fas fa-chevron-right"></i></button>
                </div>
              </section>
              
              <!-- <section class="desktop-present">
                <h1>All your Emails in one place </h1>
                <img class="mockup-ios" src="https://i.ibb.co/6PbwydT/macbook-image-1.png"/>
              </section> -->
            </main>
            
        </section>    
    `,
  methods: {
    goToMailApp() {
      this.$router.push('/email/inbox');
    }
  },
  components: {
    // appHeader
  }
};
