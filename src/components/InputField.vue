<template>
    <div>
        <v-textarea
            label="One row"
            auto-grow
            outlined
            rows="1"
            row-height="15" :value="value"
            @input="$emit('input',$event)"
          ></v-textarea>
    </div>
</template>
<script>
export default {
    props:{
        value:{
            type : String,
            required : true
        }
    },
    // methods:{
    //     updateName(e){
    //         this.name = e.target.value;
    //     }
    // }
}
</script>