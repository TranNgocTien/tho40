<template>
  <section class="section-news">
    <div class="container">
      <span class="subheading">Tin tức</span>
      <h2 class="heading-secondary">Các mẹo vặt trong sinh hoạt</h2>
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
      <swiper-slide :lazy="true" v-for="newItem in news" :key="newItem.id">
        <div class="container">
          <div class="news">
            <div class="news-img-container">
              <img
                :src="newItem.photo"
                alt=""
                class="news-img"
                :loading="lazy"
              />
            </div>
            <div class="news-content">
              <h3 class="heading-news">{{ newItem.title }}</h3>
              <p class="news-description">
                {{ newItem.content.slice(0, 150) + "..." }}
              </p>

              <div class="author-date">
                <p class="news-author">{{ newItem.author }}</p>
                <p class="news-updated">
                  Đăng ngày : {{ formatNumber(newItem.createdAt) }}
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
    async loadNews() {
      console.log("load news");
      try {
        await this.$store.dispatch("news/getNews", 0);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
    formatNumber(value) {
      return new Intl.NumberFormat("vi-VN").format(value); // 'de-DE' for German locale
    },
  },
  created() {
    this.loadNews();
  },
  computed: {
    news() {
      return this.$store.getters["news/news"];
    },
  },
};
</script>

<style scoped>
.section-news {
  padding: 9.6rem 0;
}
.news {
  width: 100%;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.84);
  height: 45rem;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 12%;
}
.news:hover .news-img-container img {
  transform: scale(1.5);
}
.news-img {
  transition: all 0.3s ease-out;
  width: 100%;
  height: 20rem;
}
.news-img-container {
  width: 100%;
  height: 20rem;
  overflow: hidden;
}
.heading-news {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.05;
  text-align: start;
  margin-bottom: 1rem;
}

.news-description {
  font-size: 1.5rem;
  line-height: 1.05;
}
.news-author,
.news-updated {
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.05;
}
.news-content {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}
.author-date {
  margin-bottom: 0.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
