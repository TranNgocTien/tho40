<template>
  <section-hero></section-hero>
  <section-services></section-services>
  <section-how></section-how>
  <section-voucher></section-voucher>
  <section-pricing></section-pricing>
  <SectionNews></SectionNews>
  <SectionStuffs></SectionStuffs>
  <SectionJobs></SectionJobs>
</template>

<script>
import SectionServices from "./SectionServices.vue";
import SectionHero from "./SectionHero.vue";
import SectionHow from "./SectionHow.vue";
import SectionVoucher from "./SectionVoucher/SectionVoucher.vue";
import SectionPricing from "./SectionPricing.vue";
import SectionNews from "./SectionNews.vue";
import SectionStuffs from "./SectionStuffs.vue";
import SectionJobs from "./SectionJobs.vue";
export default {
  components: {
    SectionJobs,
    SectionPricing,
    SectionHero,
    SectionHow,
    SectionServices,
    SectionVoucher,
    SectionNews,
    SectionStuffs,
  },
};
</script>
