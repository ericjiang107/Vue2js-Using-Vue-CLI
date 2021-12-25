<template>
    <footer>
        <p>
            {{ copyright }} and {{ title }}
        </p>
    </footer>
</template>

<script>
import { bus } from '../main';

export default {
    // passing in the title prop from App.vue
    props: {
        title: {
            type: String
        }
    },
    data(){
        return {
            copyright: 'Copyright 2021 Vue JS 2',
        }
    },
    methods: {

    },
    // using a life cycle hook:
    created(){
        // the created life cycle hook will fire when the component is first created
        // this is listening for the specific 'titleChanged' event to activate
        bus.$on('titleChanged', (data) => {
            // change the title of the component:
            this.title = data;
        })
    }
}
</script>

<style scoped>
    footer {
        background: darkgrey;
        padding: 6px;
    }
    p {
        color: lightgreen;
        text-align: center;
    }
</style>