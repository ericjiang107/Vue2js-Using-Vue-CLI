<template>
    <div id="ninjas">
        <ul>
            <!-- idea is: for each ninja, output the li tag with a click event so when the tag has been clicked, get the show property -->
            <!-- and turn it to the opposite (false - to true and true to false) -->
            <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show = !ninja.show">
                <h2>
                    {{ ninja.name }}
                </h2>
                <!-- we only want the speciality to show based on a boolean -->
                <h3 v-show="ninja.show">
                    {{ ninja.speciality }}
                </h3>
            </li>
        </ul>

        <!-- we want to delete an array of ninjas here and see how it affects everything else -->
        <button v-on:click="deleteNinja">Delete a ninja</button>
    </div>
</template>

<script>
export default {
    // to recieve something from the root component (App.vue):
    // we must include the name of what we want to include 
    // in order to make sure the prop we want is an array and not a string, we can turn it into an object
    props: {ninjas: {
        // include validation of if this is an array or a string 
        type: Array,
        // if the type is not an array, this will fail and you will get an error in console that states: invalid prop: type...
        required: true
    }},
    // ['ninjas'],
    data(){
        return {
            
        }
    },
    methods: {
        // we can also get access to it in methods
        test: function(){
            this.ninjas
        },
        deleteNinja: function(){
            // delete 1 from the ninjas array
            this.ninjas.pop();
        }
    },
    // life cycle hooks:
    beforeCreate(){
        // run before it is created
        alert('beforeCreate');
    },
    created(){
        alert('created');
        // this is a good point to fetch any data needed
    },
    beforeMount(){
        alert('beforeMount');
    },
    mounted(){
        alert('mounted');
        // this is a good place to go to manipulate the data
    },
    beforeUpdate(){
        alert('beforeUpdate');
    },
    updated(){
        alert('updated');
    },
}
</script>

<style scoped>
    #ninjas {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0px 20px;
        box-sizing: border-box;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0px;
    }
    li {
        /* all grows equally */
        flex-grow: 1;
        /* once they reach 300px, they are going to wrap */
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>