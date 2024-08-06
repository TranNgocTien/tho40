<template>
  <section class="section-stuffs">
    <div class="container">
      <span class="subheading">Chợ đồ cũ</span>
      <h2 class="heading-secondary">Mua, bán những vật dụng đã qua sử dụng</h2>
    </div>
    <div class="container-more">
      <router-link class="more-btn" to="/chodocu">Xem thêm</router-link>
    </div>
    <swiper-container
      :pagination="{ clickable: true }"
      :slides-per-view="4"
      :navigation="true"
      :spaceBetween="5"
      :grabCursor="true"
    >
      <swiper-slide :lazy="true" v-for="stuff in stuffs" :key="stuff.id">
        <div class="container">
          <div class="stuffs">
            <div class="stuff-img-container">
              <img
                class="stuff-img"
                :loading="lazy"
                :src="stuff.photos[0]"
                :alt="stuff.name"
              />
            </div>
            <div class="stuff-content">
              <h3 class="stuff-heading">{{ separatedName(stuff.name) }}</h3>
              <p
                class="stuff-description"
                v-if="stuff.description.length > 150"
              >
                Mô tả: {{ stuff.description.slice(0, 150) + "..." }}
              </p>
              <p class="stuff-description" v-else>
                Mô tả: {{ stuff.description }}
              </p>
              <p class="stuff-price">
                Giá bán: {{ formatNumber(stuff.sumPrice) }} VNĐ
              </p>
              <div class="province-createdAt">
                <p class="stuff-province">Địa điểm: {{ stuff.province }}</p>
                <p class="stuff-createdAt">
                  Ngày đăng: {{ convertToHumanReadable(stuff.createdAt) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script>
export default {
  methods: {
    async loadStuffs() {
      console.log("load stuffs");
      try {
        await this.$store.dispatch("stuffs/getStuff", 0);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    separatedName(name) {
      if (name.includes("-") === true) {
        return name.slice(0, name.indexOf("-"));
      } else {
        return name;
      }
    },
    convertToHumanReadable(isoString) {
      const date = new Date(isoString);
      return date.toLocaleString(); // Adjust options for desired format
    },
    formatNumber(value) {
      return new Intl.NumberFormat("vi-VN").format(value); // 'de-DE' for German locale
    },
  },
  created() {
    this.loadStuffs();
    console.log(this.stuffs);
  },
  computed: {
    stuffs() {
      return this.$store.getters["stuffs/stuffsPreview"];
    },
  },
};
</script>

<style scoped>
.section-stuffs {
  padding: 9.6rem 0;
}
.stuffs {
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.84);
  border-radius: 5px;
  overflow: hidden;
  height: 40rem;
  margin-bottom: 13%;
}
.stuffs:hover .stuff-img-container img {
  transform: scale(1.5);
}
.stuff-img {
  width: 100%;
  transition: all 0.3s ease-out;
  overflow: hidden;
  height: 25rem;
}
.stuff-img-container {
  overflow: hidden;
  height: 25rem;
  width: 100%;
}
.stuff-heading {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.05;
  text-align: start;
  margin-bottom: 1rem;
}

.stuff-content {
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 50%;
  border: 2px solid #26a553;
  color: #26a553;
}

swiper-container::part(bullet-active) {
  background-color: #26a553;
}

.stuff-description {
  font-size: 1.5rem;
  line-height: 1.05;
}
.stuff-price {
  font-size: 1.5rem;
  line-height: 1.05;
}
.stuff-province {
  font-size: 1.2rem;
  color: #ccc;
}
.stuff-createdAt {
  font-size: 1.2rem;
  color: #ccc;
}
.province-createdAt {
  margin-bottom: 1rem;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.24rem;
}

.container-more {
  width: 100vw;
  display: flex;
  padding: 2.5rem;
  justify-content: end;
}
.more-btn:link,
.more-btn:visited {
  font-size: 1.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 11px;
  text-decoration: none;
  color: #26a553;
  transition: all 0.3s ease-out;
}
.more-btn:hover,
.more-btn:active {
  background-color: #26a553;
  color: white;
}
</style>
