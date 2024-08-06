<template>
  <section class="section-voucher">
    <div class="container">
      <span class="subheading">Các chương trình khuyến mãi</span>
      <h2 class="heading-secondary">Khuyến mãi nổi bật</h2>
    </div>
    <SwiperSlider></SwiperSlider>
  </section>
</template>

<script>
import SwiperSlider from "./SwiperSlider.vue";
export default {
  components: {
    SwiperSlider,
  },

  methods: {
    async loadVoucher() {
      try {
        await this.$store.dispatch("voucher/getVoucher");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
  created() {
    this.loadVoucher();
  },
  computed: {
    vouchers() {
      return this.$store.getters["voucher/vouchers"];
    },
  },
};
</script>

<style scoped>
.section-voucher {
  padding: 9.6rem 0;
}
.voucher {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 75rem;
}
.voucher-side {
  transition: all 0.5s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 2rem;
  backface-visibility: hidden;
  height: 75rem;
}
.voucher-image {
  width: 100%;
}

.voucher:hover .voucher-side-front {
  transform: rotateY(-180deg);
}
.voucher:hover .voucher-side-back {
  transform: rotateY(0);
}

.voucher-side-front {
}

.voucher-side-back {
  padding: 15rem;
  background-color: #fff;
  color: black;
  transform: rotateY(180deg);
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(black, 0.15);
}

.name-voucher {
  text-align: center;
}
.voucher-description {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1.05;
  text-align: center;
}

.voucher-content {
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
}
</style>
