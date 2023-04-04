import axios from "axios";
import router from "@/router";

const user = {
    state: {
        users:"",
        userDetail:""
    },
    getters:{
        users: (state) => state.users,
        userDetail: (state) => state.userDetail,
    }, // cho phép gọi trực tiếp
    mutations: {
        setUser(state,user){
            state.users = user
        },
        setUserDetail(state,userDetail){
            state.userDetail = userDetail
        }
    }, // thay đổi dữ liệu của state
    actions: {
        getAllUser({commit}){
            axios.get("http://localhost:8078/api/v1/admin/user")
                .then(res=>res.data)
                .then(user=>{
                    commit('setUser',user);
                })
        },
        getUserDetail({commit},id){
            axios.get(`http://localhost:8078/api/v1/admin/user/${id}`)
                .then(res=>res.data)
                .then(userDetail=>{
                    commit('setUserDetail',userDetail);
                })
        },
        // eslint-disable-next-line no-unused-vars
        async createUser({commit}, data) {
            await axios.post(`http://localhost:8078/api/v1/admin/user`, data)
                .then(res => console.log(res.data))
                .then(() => router.push('/'))
        },
        // eslint-disable-next-line no-unused-vars
        updateUser({commit},{data,id}){
            axios.post(`http://localhost:8078/api/v1/admin/updateUser?id=${id}`,data)
                .then(res=>console.log(res.data))
                .then(() => router.push('/'))
        },
        // eslint-disable-next-line no-unused-vars
        async deleteUser({commit}, id) {
            await axios.delete(`http://localhost:8078/api/v1/admin/userDelete/${id}`)
                .then(res => res.data)
        }
    }, // dùng để call api
}


export default user