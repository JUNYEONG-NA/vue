<template>
  <div id="app">
<h1>VUE.JY</h1>



    <v-btn><router-link to="/hello">hello</router-link></v-btn>
    <v-btn><router-link to="/home">home</router-link></v-btn>
    <v-btn><router-link to="/user">user</router-link></v-btn>
    <v-btn><router-link to="/about">about</router-link></v-btn>
    <v-btn><router-link to="/modal"> Modal</router-link> </v-btn>
    <router-view/>
    </div>
    
</template>

<script>
// import TestComponent from "@/components/TestView";
// import HelloWorld from "@/components/HelloWorld";

// import UserInfo from "@/components/UserInfo";

export default {
  name: 'App',
  components:{
    // TestComponent,
    // HelloWorld
  // UserInfo
  },
  data(){
      return{
      num : 0,
      itemsss : ['a','b','c'],
      hi : 'color : red',
      comment : ['안녕','나는','준영'],
      url: "https://www.naver.com"

    }
    },
  methods :{
   hi1(){
     this.num++
   },
   showDialog(){
      this.diapatch("@/components/ModalSample",{
        
      });
   }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
