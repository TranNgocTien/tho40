<template>
  <header class="header">
    <router-link to="/">
      <img
        class="logo"
        src="../../assets/image/logo_tho_thong_minh-removebg-preview.png"
        alt="Logo"
      />
    </router-link>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li>
          <router-link class="main-nav-link" to="/home">Trang chủ</router-link>
        </li>
        <li>
          <router-link class="main-nav-link" to="/chovieclam"
            >Chợ việc làm</router-link
          >
        </li>
        <li>
          <router-link class="main-nav-link" to="/chodocu"
            >Chợ đồ cũ</router-link
          >
        </li>
        <li>
          <router-link class="main-nav-link" to="/quanlycongviec"
            >Quản lý công việc</router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="main-nav">
      <ul class="main-nav-list-icon">
        <!-- <li>
          <router-link class="main-nav-icon-link">
            <font-awesome-icon
              class="main-nav-icon"
              icon="fa-solid fa-wallet"
            />
          </router-link>
        </li>
        <li>
          <router-link class="main-nav-icon-link">
           
            <font-awesome-icon class="main-nav-icon" icon="fa-solid fa-user" />
          </router-link>
        </li> -->
        <li>
          <div v-if="token !== null" class="dropdown" @click="toggleDropdown">
            <button class="dropdown-button">
              <div class="infor-user">
                <p class="infor-name">Trần Ngọc Tiến</p>
                <p class="infor-money">GP: 1.000.000</p>
              </div>
              <div class="avatar-user">
                <img src="../../assets/image/avatar.jpg" alt="avatar" />
              </div>
              <!-- <font-awesome-icon
                class="main-nav-icon"
                icon="fa-solid fa-gear"
              />
              <span> &#x25BC; </span> -->
            </button>
            <div v-if="isOpen" class="dropdown-menu">
              <router-link>
                <span> <font-awesome-icon icon="fa-solid fa-user" /></span>Thông
                tin cá nhân</router-link
              >
              <router-link>
                <span>
                  <font-awesome-icon icon="fa-solid fa-chart-simple" /></span
                >Thống kê cá nhân</router-link
              >
              <router-link>
                <span>
                  <font-awesome-icon icon="fa-solid fa-circle-info" /></span
                >Cập nhật thông tin thợ</router-link
              >
              <router-link>
                <font-awesome-icon icon="fa-solid fa-wallet" />
                Nạp tiền</router-link
              >
              <router-link
                ><span>
                  <font-awesome-icon icon="fa-solid fa-user-xmark" /></span
                >Vô hiệu hóa tài khoản</router-link
              >
              <router-link
                ><span> <font-awesome-icon icon="fa-solid fa-sign-out" /></span>
                Đăng xuất</router-link
              >
            </div>
          </div>
          <router-link v-else class="login-btn" to="/login"
            >Đăng nhập</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    console.log(this.$store.getters["auth/token"]);
  },
  computed: {
    token() {
      return this.$store.getters["auth/token"];
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.closeDropdown();
      }
    },
  },
};
</script>
<style scoped>
.logo {
  height: 8rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* background-color: #f7fff9; */
  height: 9.6rem;
  padding: 0 4.8rem;
}

.main-nav-list {
  list-style: none;
  display: flex;
  gap: 3.2rem;
  align-items: center;
}
.main-nav-list-icon {
  list-style: none;
  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.main-nav-link:link,
.main-nav-link:visited {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1.8rem;
  transition: all 0.3s;
  border: 2px solid #fff;
  padding: 1rem;
}

.main-nav-link:hover,
.main-nav-link:active {
  color: #26a653;
  border-color: #26a653;
  border-radius: 9px;
}

.main-nav-link.nav-cta:link,
.main-nav-link.nav-cta:visited {
  padding: 1.2rem 2.4rem;
  border-radius: 9px;
  color: #fff;
  background-color: #26a653;
}

.main-nav-link.nav-cta:hover,
.main-nav-link.nav-cta:active {
  background-color: #22954b;
}

.main-nav-icon {
  display: inline-block;

  color: #26a653;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  transition: all 0.3s ease-out;
}
.main-nav-icon:hover {
  background-color: #22954b;
  border-radius: 50%;
  color: white;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  max-width: 25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  color: white;
  padding: 1rem;
  background-color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
.dropdown-menu {
  display: block;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 1.2rem 2.4rem;
  border-radius: 11px;
  transition: 0.3s ease-out;
  min-width: 25rem;
  z-index: 1;
  right: 50%;
  padding: 1rem 0;
  transform: translateX(50%);
}
.dropdown-menu a:link,
.dropdown-menu a:visited {
  color: #0f4221;
  font-size: 1.5rem;
  padding: 1.2rem 2.4rem;
  text-decoration: none;
  display: flex;
  gap: 1.2rem;
  transition: 0.3s ease-out;
  border: 1px solid #fff;
  border-radius: 4px;
}

.dropdown-menu a:hover,
.dropdown-menu a:active {
  border-color: #22954b;
  color: #176432;
}
.avatar-user {
  width: 5.7rem;
  height: 5.7rem;
  border-radius: 50%;
  border: 3px solid #26a653;
}
.avatar-user img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}

.infor-user {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  color: black;
  font-weight: 400;
  font-size: 1.5rem;
}
.login-btn:link,
.login-btn:visited {
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 11px;
  max-width: 10rem;
  border: 3px solid #26a653;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s ease-out;
  color: white;
  background-color: #26a653;
}
.login-btn:hover,
.login-btn:active {
  background-color: white;
  color: #26a653;
}
</style>
