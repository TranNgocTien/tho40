<template>
  <footer class="footer">
    <div class="container grid grid--5-cols grid--footer">
      <div class="logo-col">
        <router-link to="#">
          <img
            class="footer-logo"
            src="../../assets/image/logo_tho_thong_minh-removebg-preview.png"
            alt="Logo"
          />
        </router-link>

        <p class="copyright">Copyright &copy; 2024 by GICO</p>
      </div>
      <div class="address-col">
        <p class="footer-heading">Liên hệ</p>
        <address class="contact">
          <p class="address">
            19 Đường 18, Khu B, P.An Phú, TP.Thủ Đức, TP.HCM, VN
          </p>
          <p>
            <a class="footer-link" href="tel: +84 563378081"> +84 563378081</a
            ><br />
            <a class="footer-link" href="mailto:gico.jsc@gmail.com"
              >gico.jsc@gmail.com</a
            >
          </p>
        </address>
      </div>
      <div class="nav-col">
        <p class="footer-heading">Dịch vụ</p>
        <ul class="footer-nav">
          <li>
            <router-link to="" class="footer-link">
              Dịch vụ điện lạnh
            </router-link>
          </li>
          <li>
            <router-link to="" class="footer-link"> Sửa điện nước </router-link>
          </li>
          <li>
            <router-link to="" class="footer-link"> Giúp việc </router-link>
          </li>
          <li>
            <router-link to="" class="footer-link">
              Thiết bị gia dụng
            </router-link>
          </li>
          <li>
            <router-link to="" class="footer-link">
              Máy tính - máy in
            </router-link>
          </li>
        </ul>
      </div>

      <div class="nav-col" to="">
        <p class="footer-heading">Điều khoản</p>
        <ul class="footer-nav">
          <li>
            <router-link to="" class="footer-link">
              Chính sách bảo mật</router-link
            >
          </li>
          <li>
            <router-link to="" class="footer-link"
              >Điều khoản với đối tác thợ</router-link
            >
          </li>
          <li>
            <router-link to="" class="footer-link"
              >Hồ sơ khi đăng ký</router-link
            >
          </li>
          <li>
            <router-link to="" class="footer-link"
              >Hướng dẫn đăng ký thợ</router-link
            >
          </li>
        </ul>
      </div>
      <div class="nav-col">
        <p class="footer-heading">Ứng dụng di động</p>
        <ul class="footer-nav">
          <li>
            <a class="footer-link" href="#"> Ứng dụng Android </a>
          </li>
          <li>
            <a class="footer-link" href="#"> Ứng dụng IOS </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 12.8rem 0;
  border-top: 1px solid #e9f6ee;
}
.logo-col {
  display: flex;
  flex-direction: column;
}
.footer-logo {
  width: 80%;
  display: block;
  margin-bottom: 3.2rem;
}

.footer-heading {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: #3caf64;
}

.footer-nav {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.footer-link:link,
.footer-link:visited {
  text-decoration: none;
  font-size: 1.6rem;
  color: #767676;
  transition: all 0.3s;
}

.footer-link:hover,
.footer-link:active {
  color: #555;
}
.contact {
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.6;
}
.copyright {
  font-size: 1.4rem;
  line-height: 1.6;
  color: #767676;
}
.address {
  margin-bottom: 2.4rem;
}
.grid--footer {
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr !important;
}
</style>
