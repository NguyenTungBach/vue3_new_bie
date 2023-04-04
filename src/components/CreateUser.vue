<template>
  <div>
    CreateUser
  </div>
  <form >
    <label for="name">name:</label><br>
    <input type="text" id="name" v-model="formUser.name"><br>
    <label for="email">email:</label><br>
    <input type="text" id="email" v-model="formUser.email"><br>
    <label for="phone">phone:</label><br>
    <input type="text" id="phone" v-model="formUser.phone"><br>
    <br>
    <button type="button" @click="submitFormUser">submitFormUser</button>
  </form>
</template>

<script setup>
import { ref} from "vue";
  import {useStore} from "vuex";

  const store = useStore();

  // const formUser = reactive({
  //   name:"",
  //   email:"",
  //   phone:"",
  // })

  const formUser = ref({
    name:"",
    email:"",
    phone:"",
  })
  
  const submitFormUser = () => {
    console.log(formUser.value)
    store.dispatch('createUser',formUser.value);
  }
</script>

<style scoped>

</style>