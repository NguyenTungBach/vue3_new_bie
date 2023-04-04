<template>
  <div>
    UpdateUser
  </div>
  <form >
    <label for="name">name:</label><br>
    <input type="text" id="name" v-model="userUpdate.name"><br>
    <label for="email">email:</label><br>
    <input type="text" id="email" v-model="userUpdate.email"><br>
    <label for="phone">phone:</label><br>
    <input type="text" id="phone" v-model="userUpdate.phone"><br>
    <br>
    <button type="button" @click="submitFormUser">submitFormUser</button>
  </form>
</template>

<script setup>
import {useRoute} from "vue-router";
import { onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";

const route = useRoute();
const store = useStore();
const id = ref(route.params.id);

// const userUpdate = computed(
//     () => store.getters.userDetail
// );

const userUpdate = reactive({
  name: "",
  email: "",
  phone: ""
})

watch(() => store.getters.userDetail, () => {
  userUpdate.name = store.getters.userDetail.name
  userUpdate.email = store.getters.userDetail.email
  userUpdate.phone = store.getters.userDetail.phone
})

const submitFormUser = async () => {
  await store.dispatch('updateUser', {
    id: id.value,
    data: userUpdate} );
}

onMounted(async () => {
  await store.dispatch('getUserDetail', id.value);
})
</script>

<style scoped>

</style>