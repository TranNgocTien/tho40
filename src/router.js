import { createRouter, createWebHistory } from "vue-router";
import ChoDoCu from "./Pages/ChoDoCu.vue";
import ChoViecLam from "./Pages/ChoViecLam.vue";
import QuanLyCongViec from "./Pages/QuanLyCongViec.vue";
import TaiKhoan from "./Pages/TaiKhoan.vue";
import HomePage from "./Pages/HomePage/HomePage.vue";
import ThongBao from "./Pages/ThongBao.vue";

import LoginPage from "./Pages/Auth/LoginPage.vue";
import RegisterPage from "./Pages/Auth/RegisterPage.vue";
import NotFound from "./Pages/NotFound.vue";
import ChinhSachBaoMat from "./Pages/ChinhSachBaoMat.vue";
import BookJob from "./Pages/BookJob.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/chodocu", component: ChoDoCu },
    { path: "/taikhoan", component: TaiKhoan },
    { path: "/thongbao", component: ThongBao },
    { path: "/chovieclam", component: ChoViecLam },
    { path: "/quanlycongviec", component: QuanLyCongViec },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/chinhsachbaomat", component: ChinhSachBaoMat },
    { path: "/bookjob", component: BookJob },
    { path: "/:NotFound(.*)", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // When going back or forward in history
    } else {
      window.scrollTo(0, 0); // Scroll to top of the page
    }
  },
});

export default router;
