<template>
  <div>
    DetailUser
  </div>

  <div>
    <span>id: </span>
    <span>{{userDetail.id}}</span>
  </div>

  <div>
    <span>name: </span>
    <span>{{userDetail.name}}</span>
  </div>

  <div>
    <span>email: </span>
    <span>{{userDetail.email}}</span>
  </div>

  <div>
    <span>phone: </span>
    <span>{{userDetail.phone}}</span>
  </div>

  <button type="button"><a :href="'/'">Back to list</a></button>

</template>

<script setup>
  import {useRoute} from "vue-router";
  import {computed, onMounted, ref} from "vue";
  import {useStore} from "vuex";

  const route = useRoute();
  const store = useStore();
  const id = ref(route.params.id);

  const userDetail = computed(
      () => store.state.user.userDetail
  );

  onMounted(()=>{
    store.dispatch('getUserDetail',id.value);
  })


</script>

<style scoped>

</style>