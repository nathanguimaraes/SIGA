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
            path: '/sobre',
            component: () => import('../views/Sobre.vue')
        },
        {
            path: '/relatorio',
            component: () => import('../views/Relatorio.vue')
        },
        {
            path: '/analises',
            component: () => import('../views/Analises.vue')
        },
        {
            path: '/imagens',
            component: () => import('../views/Imagens.vue')
        }
    ]
})

export default router