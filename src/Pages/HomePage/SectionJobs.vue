<template>
  <section class="section-jobs">
    <div class="container">
      <span class="subheading"> Chợ việc làm </span>
      <h2 class="heading-secondary">
        Đặt việc, tìm kiếm thợ với đa dạng các loại dịch vụ
      </h2>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    async loadJobs() {
      try {
        await this.$store.dispatch("jobs/getJobs", 0);
      } catch (err) {
        this.error = err.message || "Something went wrong!";
      }
    },
  },
  created() {
    this.loadJobs();
  },
};
</script>
<style scoped>
.section-jobs {
  padding: 9.6rem 0;
}
</style>
