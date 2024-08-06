<template>
  <swiper-container
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :navigation="true"
  >
    <swiper-slide :lazy="true" v-for="voucher in vouchers" :key="voucher.id">
      <div class="container">
        <div class="voucher" @click="activeTransfrom">
          <img
            :loading="lazy"
            class="voucher-image voucher-side voucher-side-front"
            :class="{
              activeTransfromFront: isActiveTransform,
            }"
            :src="voucher.img"
            alt="Mã giảm giá Thợ 4.0"
          />

          <div
            class="voucher-side voucher-side-back"
            :class="{
              activeTransfromBack: isActiveTransform,
            }"
          >
            <div class="voucher-content">
              <span class="subheading name-voucher">{{ voucher.name }}</span>
              <p class="voucher-description">
                {{ voucher.description }}
              </p>
              <p>
                Từ ngày
                {{ convertToHumanReadable(voucher.from) }} đến ngày
                {{ convertToHumanReadable(voucher.to) }}
              </p>
              <p>
                Điều kiện: Giá trị đơn hàng tối thiểu
                {{ formatNumber(voucher.sum) }} VNĐ
              </p>

              <p>Trị giá: {{ formatNumber(voucher.limit) }} VNĐ</p>
              <p>Mã giảm giá: {{ voucher.code }}</p>

              <p>Số lượng: {{ voucher.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script>
export default {
  data() {
    return {
      isActiveTransform: false,
    };
  },

  computed: {
    vouchers() {
      return this.$store.getters["voucher/vouchers"];
    },
  },

  methods: {
    activeTransfrom() {
      console.log("click");
      this.isActiveTransform = !this.isActiveTransform;
    },

    convertToHumanReadable(isoString) {
      const date = new Date(isoString);
      return date.toLocaleString(); // Adjust options for desired format
    },
    formatNumber(value) {
      return new Intl.NumberFormat("vi-VN").format(value); // 'de-DE' for German locale
    },
  },
};
</script>

<style scoped>
.voucher {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 75rem;
  margin-bottom: 2%;
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

.activeTransfromFront {
  transform: rotateY(-180deg);
}
.activeTransfromBack {
  transform: rotateY(0) !important;
}

.voucher-side-front {
}

.voucher-side-back {
  padding: 15rem;
  background-color: #fff;
  color: black;
  transform: rotateY(180deg);
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.84);
  border: 0.5px solid #000000;
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

.swiper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
</style>
