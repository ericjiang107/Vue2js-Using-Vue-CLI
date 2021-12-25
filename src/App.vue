<template>
  <div>
    <h1 class="purpleColor">
      {{ title }}
    </h1>
    <!-- Nest the component from ninjaComponent.vue and main.js -->
    <randomName></randomName>

    <hr>

    <div>
      <h1>Using header component</h1>
      <!-- <app-header />

      <hr> -->
      
      <!-- testing primitive types -->
      <!-- adding in a changeEvent using $emit in header.vue -->
      <!-- $event is the event data -->
      <app-header v-bind:title="title" v-on:changeTitle='updateTitle($event)' />
    </div>

    <br>
    <hr>

    <div>
      <h1>Using footer component</h1>
      <!-- <appFooter /> -->
      <appFooter v-bind:title="title" />
    </div>

    <br>
    <hr>

    <div>
      <h1>Ninja Names</h1>
      <!-- to pass on the ninjas prop here -->
      <!-- for an attribute to be dynamic, we must use v-bind -->
      <ninjaNames v-bind:ninjas="ninjas" />

      <hr>

      <!-- testing the deleteNinja function in the ninjas component -->
      <!-- this binds to all the ninja components so if you delete one, it will affect every other one 
      too since we are affecting the original source (arrays are reference types) -->
      <ninjaNames v-bind:ninjas="ninjas" />

    </div>
  </div>
</template>

<script>
import names from './ninjaComponent.vue';
// importing the header component:
import header from './components/header.vue';
import foot from './components/footer.vue';
import ninja from './components/ninjas.vue';


export default {
  // register the component here (the same as writing that as a <></> from above):
  // the components are nested 
  components: {
    'randomName': names,
    'appHeader': header,
    'appFooter': foot,
    'ninjaNames': ninja,
  },
  data () {
    return {
      title: 'App.vue component',
      // switching the array from ninjas.vue to the root component here:
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
      // so if we want to change the title in both the header and footer, we can simply change title below
      title: 'Vue Ninjas Changed',
    }
  },
  methods: {
    updateTitle: function(event){
      // updating this.title to whatever event is 
      this.title = event
    }
  }
}
</script>

<style>

/* css styling goes here */
.purpleColor {
  color: purple;
}

</style>
