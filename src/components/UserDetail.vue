<template>
    <div>
        <v-btn outlined small class='btn-eto ml-2'>
            {{nameOfChild}},nameOfChild</v-btn>
    </div>    
</template>
<script>
export default {
    props:['nameOfChild'],
    data(){
        return{
        }
    }
}
</script>