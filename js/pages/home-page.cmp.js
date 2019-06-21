// import appHeader from '../cmps/app-header.cmp.js'

export default {
  name: 'homePage',
  template: `
        <section class="home-page">
            <!-- <app-header></app-header> -->
            <main>
              <h1>Welcome to your appsus app!</h1>
              <router-link to="/email/inbox">
              <a href="#">Come in to our NEW email app</a>
            </router-link>
              <img src="../../img/mac-mockup-email.png"/>
            </main>
            
        </section>    
    `,
  components: {
    // appHeader
  }
};
