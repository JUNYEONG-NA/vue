<template>
    <div>
        <h1> User컴포넌트</h1>
        <p> 이름 : {{ name }}</p>

        <button @click="changeName()"> 이름변경 changeName()</button>
        <div>
            <br/>
            <UserDetail :nameOfChild="name" /><span>UserDetail</span>
            <p>UserEdit</p>
            <UserEdit :name="name"
                    :address="address"
                    :phone="phone"
                    :hasDog="hasDog"
            />
            <v-alert type="success">hi </v-alert>
            <v-btn
  color="accent"
  outlined
  small
>click</v-btn>
           </div> 
    </div>
</template>
<script>
import UserDetail from '@/components/UserDetail';
import UserEdit from '@/components/UserEdit';


export default {
    components :{
        UserDetail,
        UserEdit
    },
    data(){
        return{
            name : '나는준영',
            address : 'Seoul',
            phone : '010-6711-0829',
            hasDog : false
            // date : YYYYMMDD
        }
    },
    methods:{

        changeName(){
            this.name= 'im junyeong';
        }
    }
}
</script>