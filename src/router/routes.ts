import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/customer',
    component: () => import('layouts/CustomerLayout.vue'),
    children: [{ path: '', component: () => import('pages/customer/dataperumahan.vue') }]
  },
  {
    path: '/transaksi',
    component: () => import('layouts/TransaksiLayout.vue'),
    children: [{ path: '', component: () => import('pages/transaksi/datatransaksi.vue') }]
  },
    {
    path: '/',
    component: () => import('layouts/LoginRegis.vue'),
    children: [{ path: 'auth/login', component: () => import('pages/user/Login.vue') },
    { path: 'auth/registrasi', component: () => import('pages/user/Registrasi.vue') }
  ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
