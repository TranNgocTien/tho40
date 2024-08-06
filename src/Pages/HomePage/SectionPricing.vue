<template>
  <section class="section-pricing">
    <div class="container center-text">
      <span class="subheading">Lợi ích</span>
      <h2 class="heading-secondary">TẠI SAO BẠN CHỌN CHÚNG TÔI</h2>
    </div>
    <div class="container grid grid--2-cols margin-bottom-md">
      <div class="pricing-plan pricing-plan--tho">
        <header class="plan-header">
          <p class="plan-name">CHỦ NHÀ/CHỦ DOANH NGHIỆP</p>
          <img
            class="plan-img"
            src="../../assets/image/engineer-construction-concept-cartoon-hand-drawn-cartoon-art-illustration.png"
            alt="Thợ 4.0"
          />
          <p class="plan-text">Thợ Thông Minh sẽ giúp ban:</p>
        </header>
        <ul class="list">
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Tiết kiệm thời gian</span>
          </li>
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Tiết kiệm chi phí cho dịch vụ</span>
          </li>
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Tìm được 1 dịch vụ ngay lập tức</span>
          </li>
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Tìm được 1 dịch vụ đáng tin cậy</span>
          </li>
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Tìm được 1 người thợ giỏi tay nghề</span>
          </li>
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Nơi bạn sinh sống thêm tiện nghi và an toàn</span>
          </li>
        </ul>
        <div class="plan-sign-up">
          <router-link class="btn btn--full">Đặt việc ngay</router-link>
        </div>
      </div>
      <div class="pricing-plan">
        <header class="plan-header">
          <p class="plan-name">Thợ</p>
          <img
            src="../../assets/image/engineer-construction-builder-work-concept-cartoon-hand-drawn-cartoon-art-illustration.png"
            alt="Thợ 4.0 đăng ký"
            class="plan-img"
          />
          <p class="plan-text">Thợ Thông Minh sẽ giúp ban:</p>
        </header>

        <ul class="list">
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Tăng thêm thu nhập</span>
          </li>
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span>Tự chủ cả về thời gian lẫn công việc</span>
          </li>
          <li class="list-item">
            <font-awesome-icon class="list-icon" icon="fa-solid fa-check" />
            <span> Được tôn trọng và nâng cao nghiệp vụ, tay nghề</span>
          </li>
        </ul>
        <div class="plan-sign-up plan-sign-up--dang-ky">
          <router-link class="btn btn--full">Ứng tuyển ngay</router-link>
        </div>
      </div>
    </div>
    <div class="container grid">
      <aside class="plan-details">
        Đã có 942 thợ tham gia và 1884 đơn dịch vụ đã được đặt trên ứng dụng Thợ
        4.0
      </aside>
    </div>
    <div class="container grid grid--5-cols">
      <!-- <div class="feature">
        <font-awesome-icon class="list-icon" icon="fa-solid fa-users-gear" />
        <p class="feature-title">942 thợ</p>
        <p class="feature-text">Đang tham gia ứng dụng Thợ 4.0</p>
      </div> -->

      <div class="feature">
        <font-awesome-icon class="feature-icon" icon="fa-solid fa-snowflake" />
        <p class="feature-title">Điện lạnh</p>
        <p class="feature-text">360 thợ đã tham gia vào Thợ 4.0</p>
      </div>
      <div class="feature">
        <font-awesome-icon
          class="feature-icon"
          icon="fa-solid fa-screwdriver-wrench"
        />
        <p class="feature-title">Lắp đặt thiết bị gia dụng</p>
        <p class="feature-text">184 thợ đã tham gia vào Thợ 4.0</p>
      </div>
      <div class="feature">
        <font-awesome-icon class="feature-icon" icon="fa-solid fa-droplet" />
        <p class="feature-title">Điện nước</p>
        <p class="feature-text">205 thợ đã tham gia vào Thợ 4.0</p>
      </div>
      <div class="feature">
        <font-awesome-icon class="feature-icon" icon="fa-solid fa-broom" />
        <p class="feature-title">Giúp việc</p>
        <p class="feature-text">132 thợ đã tham gia vào Thợ 4.0</p>
      </div>
      <div class="feature">
        <font-awesome-icon class="feature-icon" icon="fa-solid fa-computer" />
        <p class="feature-title">Máy tính-máy in</p>
        <p class="feature-text">142 thợ đã tham gia vào Thợ 4.0</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-pricing {
  padding: 4.8rem 0 12.8rem 0;
}
.pricing-plan {
  border-radius: 11px;
  padding: 4.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 85%;
  position: relative;
}
.plan-header {
  text-align: center;
  margin-bottom: 4.8rem;
}
.plan-name {
  color: #3caf64;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.75;
  margin-bottom: 3.2rem;
}
.plan-text {
  font-size: 1.6rem;
  line-height: 1.6;
  color: #6f6f6f;
}

.plan-img {
  width: 100%;
}
.plan-sign-up {
  text-align: center;
  margin-top: 4.8rem;
}
.pricing-plan--tho {
  justify-self: end;
}

.plan-sign-up--dang-ky {
  position: absolute;
  top: 83%;
  left: 50%;
  transform: translateX(-50%);
}

.feature-icon {
  color: #26a653;
  width: 3.2rem;
  height: 3.2rem;
  margin-bottom: 3.2rem;
  padding: 1.6rem;
  border-radius: 50%;
  background-color: #e9f6ee;
}
.feature-title {
  font-size: 2.2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 1.6rem;
}
.feature-text {
  font-size: 1.8rem;
  line-height: 1.8;
}

.feature {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.plan-details {
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
}
</style>
