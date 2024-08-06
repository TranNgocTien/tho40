<template>
  <login-page
    :phone="phone"
    :password="password"
    :formIsValid="formIsValid"
    :isRemember="isRemember"
    @submit-form="submitForm"
  ></login-page>
  <!-- <form @submit.prevent="submitForm">
      <div v-if="mode === 'signup'" class="form-control">
        <label for="name">Họ và tên</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <div class="form-control" v-if="mode === 'signup'">
        <label for="address">Địa chỉ</label>
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

      <p v-if="!formIsValid">
        Vui lòng điền số điện thoại và mật khẩu hợp lệ (mật khẩu dài tối thiểu 6
        ký tự).
      </p>
      <base-button>{{ submitButtonCaption }}</base-button>

      <base-button type="button" mode="flat" @click="switchAuthMode">{{
        switchModeButtonCaption
      }}</base-button>
    </form> -->
</template>

<script>
import LoginPage from "./LoginPage.vue";

export default {
  components: {
    LoginPage,
  },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isRemember: "",
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Đăng nhập";
      } else {
        return "Đăng ký";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Bạn đã có tài khoản.";
      } else {
        return "Bạn chưa có tài khoản.";
      }
    },
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.phone === "" ||
        this.phone.includes(/[a-zA-Z]/) ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      if (this.mode === "login") {
        console.log("in");
        this.$store.dispatch("signIn", {
          phone: this.phone,
          password: this.password,
        });
      }
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;

  padding: 2rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #26a653;
  background-color: white;
  outline: none;
}
</style>
