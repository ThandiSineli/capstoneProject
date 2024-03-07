<template>
  <navbar/>
  <Footer/>
  <spinner/>
 <router-view/>
</template>

<script>
  import Footer from './components/footer.vue';
 import navbar from './components/navbar.vue';
import Spinner from './components/spinner.vue';
 
  export default{
    components:{
      navbar,
      Footer,
        Spinner,
     
     
    },
    data() {
    return {
      loading: true, // Spinner set to true when loading 
    };
  },
    
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


footer {
    text-align: center;
    margin-top: 20px;
    color: #000000;
    position: fixed;
    bottom: 0%;
    width: 100%;
    background-color:beige; 
  }
  

</style>
