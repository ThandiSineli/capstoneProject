<template>
    <div>
       <footer>
           <p>&copy; {{ currentYear }}@Tee's Crown Haven</p>
       </footer>
    </div>
 </template>

 <script>
   export default {
       data() {
           return{
               currentYear: new Date().getFullYear(),
           }
       }
   }
</script>

<style>
   /* footer {
        background-color: beige;
        padding: 10px;
        text-align: center;
} */

   footer p {
        margin: 0;
        color: black;
}
</style>