<template>
    <div>
        <h3>회원 정보 수정하기</h3>
        <textarea v-text="name">
        </textarea>
    </div> 
</template>
<script>
export default {
    props:["name","address","phone","hasDog"],
    data(){
        return{
            user : {}
        }
    },
    created(){
        this.user.name = this.name,
        this.user.address = this.address,
        this.user.phone = this.phone,
        this.user.hasDog = this.hasDog
    }
}
</script>