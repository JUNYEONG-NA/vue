<template>
<div><br>
<h1> HOME VIEW</h1>
  <form action="">
    <InputField v-model="name"/>
    <v-btn>click</v-btn>
  </form>
  {{name}}
</div>
</template>

<script>
  import InputField from '../components/InputField.vue'

  export default {
    name: 'HomeView',

    components: {
      InputField,
    },
    data(){
      return{
        name:''
      }
    }
  }
</script>
