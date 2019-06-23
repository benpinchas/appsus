

export default {
    template: `
            <div class="note-content" >
                <i class="fas fa-edit" @click="editSrc" style="margin-bottom: 10px;"></i>
                <img :src="data"/>
                <input type="text" @change="setSrc" v-if="isEditContext" class="src-input"/>
            </div>

    `,
    props:['data'],
    data() {
        return {
            isEditContext: false,
        }
    },
    methods: {
        editSrc() {
            this.isEditContext = !this.isEditContext
        },
        setSrc() {
            this.data = 'https://ichef.bbci.co.uk/news/660/cpsprodpb/DFCB/production/_104119275_gettyimages-513750122.jpg' 
        }
    }
}


