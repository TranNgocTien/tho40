<template>
  <section class="section-featured">
    <div class="container">
      <h2 class="heading-featured-in">Dịch vụ của Thợ 4.0</h2>
      <div class="logos">
        <div class="service-container">
          <div class="logo">
            <img
              src="https://vstserver.com/jobservice/AIR_SV.jpeg"
              alt="Dịch vụ máy lạnh"
            />
          </div>
          <span class="sub-photo">Dịch vụ máy lạnh</span>
        </div>
        <div class="service-container">
          <div class="logo">
            <img
              src="https://vstserver.com/jobservice/WASH_SV.jpeg"
              alt="Dịch vụ máy giặt"
            />
          </div>
          <span class="sub-photo">Dịch vụ máy giặt</span>
        </div>
        <div class="service-container">
          <div class="logo">
            <img
              src="https://vstserver.com/jobservice/FAN_SV.jpeg"
              alt="Dịch vụ máy quạt"
            />
          </div>
          <span class="sub-photo">Dịch vụ máy quạt</span>
        </div>
        <div class="service-container">
          <div class="logo">
            <img
              src="https://vstserver.com/jobservice/FRIDGE_SV.jpeg"
              alt="Dịch vụ tủ lạnh"
            />
          </div>
          <span class="sub-photo">Dịch vụ tủ lạnh</span>
        </div>
        <div class="service-container">
          <div class="logo">
            <img
              src="https://vstserver.com/jobservice/EW_SV.jpeg"
              alt="Dịch vụ điện nước"
            />
          </div>
          <span class="sub-photo">Dịch vụ điện nước</span>
        </div>
        <div class="service-container">
          <div class="logo">
            <img
              src="https://vstserver.com/jobservice/FUR_SV.jpeg"
              alt="Dịch vụ gia dụng"
            />
          </div>
          <span class="sub-photo">Dịch vụ gia dụng</span>
        </div>
        <div class="service-container">
          <div class="logo">
            <img
              src="https://vstserver.com/jobservice/PC_SV.jpeg"
              alt="Dịch vụ máy tính - máy in"
            />
          </div>
          <span class="sub-photo">Dịch vụ máy tính - máy in</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-featured {
  padding: 4.8rem 0;
}

.heading-featured-in {
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 600;
  color: #3caf64;
  text-align: center;
  margin-bottom: 3.2rem;
}

.logos {
  display: flex;
  justify-content: space-around;
}

.logos img {
  height: 10rem;
  padding: 1.5rem;
}

.logo {
  border-radius: 50%;
  background-color: #e9f6ee;
  transition: all 0.3s ease-out;
}

.logo:hover {
  background-color: #bee4cb;
}

.service-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
}

.sub-photo {
  font-size: 1.4rem;
  font-weight: 600;
  color: #555;
  letter-spacing: 1.05;
}
</style>
