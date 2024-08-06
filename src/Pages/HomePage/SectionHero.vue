<template>
  <section class="section-hero">
    <div class="hero">
      <div class="hero-text-box">
        <h1 class="heading-primary">
          Thợ 4.0 - nền tảng công nghệ Internet of Things kết nối Thợ thông minh
          với Chủ nhà
        </h1>
        <p class="hero-description">
          Bạn đang cần Thợ xử lý các việc trong nhà, hãy sử dụng chức năng “Đăng
          việc” trên trang “Chợ việc làm”. Chúng tôi sẽ giúp bạn tìm được Thợ
          giỏi trong thời gian nhanh nhất.
        </p>
        <router-link to="/" class="btn btn--full margin-right-sm"
          >Đặt việc ngay</router-link
        >
        <router-link href="/chovieclam" class="btn btn--outline"
          >Chợ việc làm &rarr;</router-link
        >
      </div>
      <div class="hero-img-box">
        <img
          src="../../assets/image/tho_thong_minh_hero.png"
          alt="Worker image"
          class="hero-img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-hero {
  background-color: #fff;
  padding: 4.8rem 0 9.6rem 0;
}
.hero {
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  padding: 0 3.2rem;
  gap: 9.6rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.hero-img {
  width: 100%;
}

.hero-description {
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
}
</style>
