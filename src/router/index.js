import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/produtor',
            component:() => import('../views/Produtor.vue')
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        }
    ]
})

export default router