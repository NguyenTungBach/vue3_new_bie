<template>
  <div>
    ListUser
  </div>
  <button type="button"><a :href="'/create'">Create</a></button>
  <table>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>email</th>
      <th>phone</th>
      <th>Action</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>
        <button type="button"><a :href="'/detail/' + user.id">Detail</a></button>
        <button type="button"><a :href="'/update/' + user.id">Update</a></button>
        <button type="button" @click="deleteUser(user.id)">Delete</button>
      </td>
    </tr>
  </table>

</template>

<script setup>
  import {useStore} from "vuex";
  import {computed, onBeforeMount} from "vue";

  const store = useStore();

  const users = computed(
      () => store.state.user.users
  );

  const deleteUser = async (id) => {
    await store.dispatch('deleteUser', id);
    await store.dispatch('getAllUser');
  }

  onBeforeMount(()=>{
    store.dispatch('getAllUser');
  })
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>