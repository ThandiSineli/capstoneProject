<template>
  <div id="app">
    <navbar />
    <router-view />
    <footer />
    <spinner/>
    
</div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import footer from '@/components/footer.vue';
import spinner from '@/components/spinner.vue';

export default {
  components: {
    navbar,
    footer,
    spinner
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
  padding-top: 70px; /* Adjust the padding to accommodate the navbar */
}

@media only screen and (min-width: 768px) {
  
  #app {
    padding-top: 0; /* Remove padding for larger screens */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  router-view {
    flex-grow: 1;
  }
}

</style>
