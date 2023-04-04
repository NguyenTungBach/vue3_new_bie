import {createStore} from "vuex";
import user from "@/store/user/user-slice";


const store = createStore({
    modules: {
        user: user
    }
})

export default store;