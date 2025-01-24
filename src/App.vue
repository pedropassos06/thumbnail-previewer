<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
  name: 'AppVue',
  components: {
    RouterView, 
  },
}
</script>

