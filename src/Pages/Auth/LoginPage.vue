<template>
  <div>
    <base-dialog :show="!!isError" title="Lỗi đăng nhập" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Đang xác thực..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <section class="section-login" id="overlay">
      <div class="login">
        <div class="login-width">
          <div class="login-img-box">
            <img
              src="../../assets/image/logo_tho_thong_minh-removebg-preview.png"
              alt="Thợ 4.0 logo"
              class="login-img"
            />
            <p class="login-img-description">
              Thợ 4.0 giúp "thợ thông minh" kết nối với "chủ nhà"
            </p>
          </div>
          <div class="login-text-box">
            <p class="login-title">Đăng nhập</p>
            <p class="login-welcome">Chào mừng quay trở lại 👋</p>
            <form @submit.prevent="submitForm">
              <div class="form-control">
                <label for="phone">Số điện thoại</label>
                <input type="tel" id="phone" v-model.trim="phone" />
              </div>
              <div class="form-control">
                <label for="password">Mật khẩu</label>
                <input type="password" id="password" v-model.trim="password" />
              </div>
              <p class="check-form-valid-text" v-if="!formIsValid">
                Vui lòng điền số điện thoại và mật khẩu hợp lệ (mật khẩu dài tối
                thiểu 6 ký tự).
              </p>
              <div class="remember-forgot">
                <div class="remember-input">
                  <input type="checkbox" id="isRemember" v-model="isRemember" />
                  <label for="isRemember">Ghi nhớ mật khẩu</label>
                </div>
                <router-link class="forgot-link" to=""
                  >Quên mật khẩu</router-link
                >
              </div>
              <base-button class="login-btn" @click="submitForm">
                Đăng nhập
              </base-button>

              <base-button type="button" mode="flat"> </base-button>

              <p class="register-switch-button">
                Bạn chưa có tài khoản?
                <router-link to="/register">Đăng ký ngay 👉</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseDialog from "@/components/ui/BaseDialog.vue";
import { mapGetters } from "vuex";
export default {
  components: { BaseDialog },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      password: "",
      formIsValid: true,

      isRemember: "",
      isLoading: false,
      // error: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["error", "isError"]),
  },
  methods: {
    async submitForm() {
      let isSuccess = false;
      this.formIsValid = true;
      if (this.phone === "" || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        isSuccess = await this.$store.dispatch("auth/signIn", {
          phone: this.phone,
          password: this.password,
        });
        if (isSuccess === true) {
          this.$router.replace("/home");
        }
      } catch (err) {
        this.error = err.message || "Đăng nhập thất bại,vui lòng thử lại sau";
      }

      this.isLoading = false;
    },

    handleError() {
      this.$store.dispatch("auth/cleanError", {
        error: null,
      });
    },
  },
};
</script>

<style scoped>
.section-login {
  padding: 4.8rem 0 9.6rem 0;
  background-image: url("../../assets/image/background-white-login.jpeg") !important;
}
#overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10);

  background: transparent;
  background: transparent;
}
.login-welcome {
  font-size: 1.3rem;
  color: #082111;
  letter-spacing: 0.5px;
  padding-left: 2.2rem;
  margin-bottom: 0.5rem;
}
.login-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #26a653;
  padding-left: 2rem;
  margin-bottom: 1rem;
}
/* .login-text-box {
  height: 50rem;
} */
.login-width {
  max-width: 55rem !important;
  margin: 2rem auto;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.login {
  max-width: 130rem;
  margin: 0 auto;
  /* display: grid; */
  padding: 0 3.2rem;
  /* gap: 9.6rem;
  grid-template-columns: 1fr 1fr; */
  align-items: center;
}
.login-img-box {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}
.login-img {
  width: 50%;
}
.login-img-description {
  padding: 1rem;
  color: #082111;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
}
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 1.5rem 0;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font-size: 1.3rem !important;
  height: 3.5rem;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  border-radius: 11px;
  padding-left: 1rem;
}

input:focus,
textarea:focus {
  border-color: #26a653;
  background-color: white;
  outline: none;
  padding-left: 1rem;
}

.check-form-valid-text {
  margin: 1.5rem 0;
  font-size: 1.2rem;
  color: red;
}

.login-btn {
  font-size: 1.5rem;
  width: 100%;
}

.remember-forgot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.remember-input {
  gap: 0.5rem;
  display: flex;
}

label[for="isRemember"] {
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
}

input[type="checkbox"] {
  width: 1.2em;
  height: 1.2rem;
  accent-color: #26a653;
  border: 1px solid #26a653;
  border-radius: 0.5rem;
}

.forgot-link:link,
.forgot-link:visited {
  text-decoration: none;
  font-size: 1.2rem;
  color: #26a653;
}
.forgot-link:hover,
.forgot-link:active {
  color: #1b743a;
}

.register-switch-button {
  font-size: 1.2rem;
  text-align: center;
}
.register-switch-button a:link,
.register-switch-button a:visited {
  text-decoration: none;

  color: #26a653;
}
.register-switch-button a:hover,
.register-switch-button a:active {
  color: #1b743a;
}
</style>
