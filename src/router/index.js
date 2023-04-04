import { createRouter, createWebHistory } from 'vue-router'
import UpdateUser from "@/components/UpdateUser";
import DetailUser from "@/components/DetailUser";
import CreateUser from "@/components/CreateUser";
import ListUser from "@/components/ListUser";
import LayoutComponent from "@/components/layout/LayoutComponent";


const routes = [
    {
        path: '/',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListUser
            },
            {
                path: '/create',
                component: CreateUser
            },
            {
                path: '/detail/:id',
                component: DetailUser
            },
            {
                path: '/update/:id',
                component: UpdateUser
            },
        ]
    },
]

const index = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default index
