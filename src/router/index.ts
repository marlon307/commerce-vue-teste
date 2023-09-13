import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue")
    },
    {
      path: "/create-product",
      name: "Create Product",
      component: () => import("../views/CreateProductView.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/product/:id",
      name: "Page product",
      component: () => import("../views/ProductView.vue")
    }
  ]
});

const authenticate = true;
router.beforeEach((to, from, next) => {
  if (to.name === 'Create Product' && !authenticate) next({ name: 'login' })
  if (to.name === 'register' && authenticate) next({ name: 'Create Product' })
  if (to.name === 'login' && authenticate) next({ name: 'Create Product' })
  else next()
})

export default router;
