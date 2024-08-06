<template>
  <section class="section-stuffs">
    <div class="container">
      <span class="subheading">Chợ đồ cũ</span>
      <h2 class="heading-secondary">Mua, bán những vật dụng đã qua sử dụng</h2>
    </div>
    <div class="grid grid--5-cols grid-columns-gap">
      <div class="stuffs" v-for="stuff in stuffs" :key="stuff.id">
        <div class="stuff-img-container">
          <img class="stuff-img" :src="stuff.photos[0]" :alt="stuff.name" />
        </div>
        <div class="stuff-content">
          <h3 class="stuff-heading">{{ separatedName(stuff.name) }}</h3>
          <p class="stuff-description" v-if="stuff.description.length > 150">
            Mô tả: {{ stuff.description.slice(0, 150) + "..." }}
          </p>
          <p class="stuff-description" v-else>Mô tả: {{ stuff.description }}</p>
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
    <div class="container-btn">
      <base-spinner v-if="isLoading === true"></base-spinner>
      <base-button
        v-else
        class="btn-next-stuff"
        mode="flat"
        @click="loadMoreStuffs"
        >Xem thêm &darr;</base-button
      >
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  data() {
    return {
      index: 0,
      isLoading: false,
    };
  },
  components: { BaseButton },
  methods: {
    async loadStuffs() {
      console.log("load stuffs");
      this.isLoading = true;
      try {
        await this.$store.dispatch("stuffs/getStuff", this.index);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },

    async loadMoreStuffs() {
      this.index += 1;
      await this.loadStuffs();
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
  },
  computed: {
    stuffs() {
      return this.$store.getters["stuffs/stuffs"];
    },
  },
};
</script>

<style scoped>
.section-stuffs {
  padding: 9.6rem 4.8rem;
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
.stuff-img-container {
  width: 100%;
  height: 25rem;
  overflow: hidden;
}
.grid-columns-gap {
  column-gap: 3.6rem !important;
}
.stuff-img {
  width: 100%;
  height: 25rem;
  transition: all 0.3s ease-out;
}
.btn-next-stuff {
  font-size: 1.5rem;
}
.container-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
