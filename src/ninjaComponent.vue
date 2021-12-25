<template>
  <ul>
      <li v-for="ninja in ninjas" v-bind:key='ninja' class="redColor">
          {{ ninja }}
      </li>
  </ul>
</template>

<script>
export default {
  
  data () {
    return {
        ninjas: ['Yoshi', 'Mario', 'Luigi']
    }
  }
}
</script>

<style>

.redColor {
    color: red;
    font-size: 25px;
}

</style>
