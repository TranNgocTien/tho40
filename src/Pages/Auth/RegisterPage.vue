<template>
  <div>
    <base-dialog :show="!!error" :title="title" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Đang xác thực..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <section class="section-register" id="overlay">
      <div v-if="isVerify === true" class="register">
        <div class="register-width">
          <div class="register-img-box">
            <img
              src="../../assets/image/logo_tho_thong_minh-removebg-preview.png"
              alt="Thợ 4.0 logo"
              class="register-img"
            />
            <p class="register-img-description">
              Thợ 4.0 giúp "thợ thông minh" kết nối với "chủ nhà"
            </p>
          </div>
          <div class="register-text-box">
            <p class="register-title">Đăng ký</p>
            <p class="register-welcome">Chào mừng đến với Thợ 4.0 👋</p>
            <form @submit.prevent="submitForm">
              <div class="form-control">
                <label for="name">Tên của bạn</label>
                <input type="text" id="name" v-model.trim="name" />
              </div>
              <div class="form-control">
                <label for="address">Địa chỉ của bạn</label>
                <input type="text" id="address" v-model.trim="address" />
              </div>
              <div class="form-control">
                <label for="phone">Số điện thoại</label>
                <input type="tel" id="phone" v-model.trim="phone" />
              </div>
              <div class="form-control">
                <label for="password">Mật khẩu</label>
                <input type="password" id="password" v-model.trim="password" />
              </div>
              <p class="check-form-valid-text" v-if="!formIsValid">
                Vui lòng điền đầy đủ thông tin ⛔️
              </p>
              <div class="policy">
                <input type="checkbox" id="policy" v-model="agreePolicy" />
                <label for="policy"
                  ><router-link class="policy-link" to="/chinhsachbaomat"
                    >Đồng ý chính sách bảo mật</router-link
                  ></label
                >
              </div>
              <base-button class="register-btn" @click="submitForm">
                Đăng ký
              </base-button>

              <base-button type="button" mode="flat"> </base-button>

              <p class="login-switch-button">
                Bạn đã có tài khoản?
                <router-link to="/login">Đăng nhập 👉</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <base-dialog
        v-if="!isLoading"
        :show="!isVerify"
        fixed
        title="Xác thực OTP"
      >
        <div v-if="!isSendOTP" class="form-control">
          <label for="phone">Số điện thoại</label>
          <input type="tel" id="phone" v-model.trim="phone" />
        </div>
        <p class="check-form-valid-text" v-if="!phoneIsValid">
          Vui lòng nhập số điện thoại ⛔️
        </p>
        <div v-if="isSendOTP" class="form-control">
          <label for="codeOTP">Nhập mã OTP</label>
          <input type="tel" id="codeOTP" v-model.trim="codeOTP" />
        </div>

        <p class="check-form-valid-text" v-if="!codeIsValid">
          Vui lòng nhập mã OTP ⛔️
        </p>
        <base-button v-if="!isSendOTP" class="register-btn" @click="sendOTP">
          Gửi mã OTP
        </base-button>

        <base-button v-if="isSendOTP" class="register-btn" @click="verifyOTP">
          Xác thực OTP
        </base-button>
      </base-dialog>
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
      codeOTP: "",
      name: "",
      phone: "",
      address: "",
      password: "",
      isSendOTP: false,
      formIsValid: true,
      codeIsValid: true,
      phoneIsValid: true,
      isVerify: true,
      isRemember: "",
      isLoading: false,
      title: "Lỗi đăng ký",
      agreePolicy: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["error", "isError"]),
  },
  methods: {
    async sendOTP() {
      let isSuccess = false;
      this.phoneIsValid = true;
      if (this.phone === "") {
        this.phoneIsValid = false;
        return;
      }
      this.isLoading = true;

      try {
        isSuccess = await this.$store.dispatch("auth/requestOtpSignup", {
          phone: this.phone,
        });
        if (isSuccess === true) {
          this.$store.commit("setError", {
            error: "",
          });
          this.$store.commit("setIsError", { isError: true });
          this.title = "Đăng ký thành công";
        }
      } catch (err) {
        this.error =
          err.message || "Gửi yêu cầu OTP thất bại,vui lòng thử lại sau";
      }
      this.isLoading = false;
      this.isSendOTP = true;
    },
    async verifyOTP() {
      this.codeIsValid = true;

      if (this.codeOTP === "") {
        this.codeIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("auth/verifyOtpSignup", {
          phone: this.phone,
          code: this.codeOTP,
        });
      } catch (err) {
        this.error =
          err.message || "Xác thực OTP thất bại,vui lòng thử lại sau";
      }
      this.isLoading = false;
      this.isVerify = true;
      console.log(this.isVerify);
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        this.phone === "" ||
        this.password.length < 6 ||
        this.name === "" ||
        this.address === ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("auth/signIn", {
          phone: this.phone,
          password: this.password,
        });
      } catch (err) {
        this.error = err.message || "Đăng nhập thất bại,vui lòng thử lại sau";
      }

      this.isLoading = false;
    },
    handleError() {
      this.$store.dispatch("auth/cleanError", {
        error: null,
      });
      if (this.title === "Đăng ký thành công") {
        this.$router.replace("/login");
      }
    },
  },
};
</script>

<style scoped>
.section-register {
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
.register-welcome {
  font-size: 1.3rem;
  color: #082111;
  letter-spacing: 0.5px;
  padding-left: 2.2rem;
  margin-bottom: 0.5rem;
}
.register-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #26a653;
  padding-left: 2rem;
  margin-bottom: 1rem;
}
/* .login-text-box {
    height: 50rem;
  } */
.register-width {
  max-width: 55rem !important;
  margin: 2rem auto;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.register {
  max-width: 130rem;
  margin: 0 auto;
  /* display: grid; */
  padding: 0 3.2rem;
  /* gap: 9.6rem;
    grid-template-columns: 1fr 1fr; */
  align-items: center;
}
.register-img-box {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.register-img {
  width: 50%;
}
.register-img-description {
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

.register-btn {
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
  border: 1px solid #26a653 !important;
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

.login-switch-button {
  font-size: 1.2rem;
  text-align: center;
}
.login-switch-button a:link,
.login-switch-button a:visited {
  text-decoration: none;

  color: #26a653;
}
.login-switch-button a:hover,
.login-switch-button a:active {
  color: #1b743a;
}
label[for="policy"] {
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
}
.policy {
  gap: 0.5rem;
  display: flex;
  justify-content: end;
  margin-bottom: 1.5rem;
}
.policy-link:link,
.policy-link:visited {
  color: #26a653;
  text-decoration: none;
}

.policy-link:hover,
.policy-link:active {
  color: #1b743a;
}
</style>
