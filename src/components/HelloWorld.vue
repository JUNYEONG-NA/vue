<template>
  <div class="layout-subcontainer">
    <form action="">
      <InputField :name="name"/>
    </form>
  </div>
</template>
<script>
import InputField from '@/components/InputField.vue'

export default {
  components:{
    InputField
 },
  data(){
    return{
      name :'',
      badgeCnt : 999
    }
  }
}
</script>