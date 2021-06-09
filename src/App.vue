<template>

  <div id="app">
    <Navbar/>
    <Main></Main>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>

</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Main from "@/components/Main";

// console.log(axios.get("http://localhost:8080/user"))
//
// new Vue({
//   data() {
//     return {
//       info: null
//     };
//   },
//   async mounted() {
//     axios
//         .get("http://localhost:8080/user", await axios.request({
//           auth: {
//             username: "user",
//             password: "90acdd00-7eb5-4a5e-ac1c-563492abc3e2"
//           }
//         }))
//         .then(response => {
//           this.info = response
//         })
//         .catch(error => {
//           console.log(error)
//         })
//         .finally(() => {
//           console.log(this.info)
//         });
//   }
// });


export default {
  name: 'App',
  components: {
    Main,
    Navbar
  }
}
</script>

<style>

#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
