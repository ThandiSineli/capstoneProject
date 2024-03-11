<template>
  <div id="app">
    <navbar />
    <spinner />
    <router-view />
     <my-footer /> 
  </div>
</template>

<script>
import Footer from './components/footer.vue';
import Navbar from './components/navbar.vue';
import Spinner from './components/spinner.vue';

export default {
  components: {
    'my-footer': Footer, 
    navbar: Navbar,
    spinner: Spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

router-view {
  flex-grow: 1;
}

</style>
