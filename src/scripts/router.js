import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Order from '@/pages/Order';
import Orders from '@/pages/Orders';
import Signup from '@/pages/Signup';
import Register from '@/pages/Register';
import Sell from '@/pages/Sell';
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router';

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/order',
        component: Order,
    },
    {
        path: '/orders',
        component: Orders,
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/sell',
        component: Sell
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;