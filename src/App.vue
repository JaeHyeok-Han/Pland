<template>
  <div>
    <pland-header></pland-header>
    <pland-nav></pland-nav>
    <router-view></router-view>
    <pland-footer></pland-footer>
  </div>
</template>

<script>
import PlandHeader from './components/PlandHeader.vue'
import PlandFooter from './components/PlandFooter.vue'
import PlandNav from './components/PlandNav.vue'

export default {
  name: 'App',
  components: {
    'pland-header': PlandHeader,
    'pland-footer': PlandFooter,
    'pland-nav': PlandNav,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: whitesmoke;
  }
</style>