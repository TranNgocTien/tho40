<template>
  <section class="section-how">
    <div class="container">
      <span class="subheading">Tính năng</span>
      <h2 class="heading-secondary">
        Các tính năng chính của ứng dụng Thợ 4.0
      </h2>
    </div>
    <div class="container grid grid--2-cols grid--center-v">
      <div class="step-text-box">
        <p class="step-number">01</p>
        <h3 class="heading-tertiary">Màn hình trang chủ</h3>
        <p class="step-description">
          Luôn cập nhật những dịch vụ sửa chữa mới nhất và nhanh chóng để phục
          vụ cho nhu cầu của khách hàng. Bên cạnh đó còn cung cấp các típ sử
          dụng thiết bị gia dụng hiệu quả và kéo dài tuổi thọ của thiết bị.
        </p>
      </div>
      <div class="step-img-box">
        <img
          src="../../assets/image/IMG_2743.png"
          class="step-img"
          alt="home screen app"
        />
      </div>
      <div class="step-img-box">
        <img
          src="../../assets/image/IMG_2741.png"
          class="step-img"
          alt="Chợ đồ cũ"
        />
      </div>
      <div class="step-text-box">
        <p class="step-number">02</p>
        <h3 class="heading-tertiary">Chợ đồ cũ</h3>
        <p class="step-description">
          Bạn đang cần THANH LÝ các sản phẩm không dùng trong nhà, hãy sử dụng
          chức năng “Đăng tin chợ” trên trang “Chợ đồ cũ”. Chúng tôi sẽ giúp bạn
          bán/thanh lý sản phẩm trong thời gian nhanh nhất, tiện ích nhất.
        </p>
      </div>

      <div class="step-text-box">
        <p class="step-number">03</p>
        <h3 class="heading-tertiary">Chợ việc làm</h3>
        <p class="step-description">
          Bạn đang cần Thợ xử lý các việc trong nhà, hãy sử dụng chức năng “Đăng
          việc” trên trang “Chợ việc làm”. Chúng tôi sẽ giúp bạn tìm được Thợ
          giỏi trong thời gian nhanh nhất.
        </p>
      </div>
      <div class="step-img-box">
        <img
          src="../../assets/image/IMG_2742.png"
          class="step-img"
          alt="Chợ việc làm"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.section-how {
  padding: 9.6rem 0;
}

.step-img {
  width: 40%;
}

.step-number {
  color: #d4eddd;
  font-size: 9.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
}
.step-description {
  font-size: 1.8rem;
  line-height: 1.8;
}

.step-img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.step-img-box::before,
.step-img-box::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  display: block;
}
.step-img-box::before {
  width: 60%;
  padding-bottom: 60%;
  background-color: #e9f6ee;
  z-index: -2;
}

.step-img-box::after {
  width: 50%;
  padding-bottom: 50%;

  background-color: #d4eddd;
  z-index: -1;
}
</style>
