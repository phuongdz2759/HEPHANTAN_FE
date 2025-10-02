import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/test/index.vue')
    },
    {
        path : '/Mon-an',
        component: ()=>import('../components/MonAn/index.vue')
    },
      {
        path : '/nhan-vien',
        component: ()=>import('../components/NhanVien/index.vue')
    },
     {
        path : '/dai-ly',
        component: ()=>import('../components/DaiLy/index.vue')
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router