<template>
    <header>
        <h1 v-on:click="changeTitle">
            <!-- we can now add a click event so when its been clicked, the title will change -->
            <!-- only the title in the header will change since the method is being called to the prop only here -->
            {{ title }}
        </h1>
    </header>
</template>

<script>
// importing the bus event from main.js
import { bus } from '../main';

export default {
    props: {
        // we will recieve title as an object from App.vue
        title: {
            type: String
        }
    },
    data(){
        return {
            title: 'Vue Ninjas'
        }
    },
    methods: {
        changeTitle: function(){
            // this.title = 'Vue Wizards New Change'
            // changing the function to rerender the title in App.vue by using event:
            // $emit will emit an event taking in a name ('name', 'second parameter of what you want)
            // this.$emit('changeTitle', 'Ninjas changed into Wizards');


            // changing the title here for the event bus 
            this.title = 'Ninjas changed into Wizards';
            // using the event bus instead:
            bus.$emit('titleChanged', 'Ninjas changed into Wizards');
            // this is connected to footer.vue bus since we imported it there (the bus in footer will listen for the change)
        }
    }
}
</script>

// scoped means you only want the styling to affect this specific component
<style scoped>
    header{
        background: lightgreen;
        padding: 10px;
    }
    
    h1 {
        color: darkgray;
        text-align: center;
    }
</style>