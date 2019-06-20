var bus = new Vue();

export const SHOW_MSG = 'show-msg';
export const PUKI = 'puki';

bus.$on(PUKI, (ev)=>{
    console.log('Puki just Happened', ev);
})

export default bus;
