<template>
  <section class="section-jobs">
    <div class="container">
      <span class="subheading">Chợ việc làm</span>
      <h2 class="heading-secondary">
        Đặt việc, tìm kiếm thợ với đa dạng các loại dịch vụ
      </h2>
    </div>
    <base-button class="fixed-btn" @click="handleBookJobDialog"
      >Đặt việc</base-button
    >
    <book-dialog
      :show="showDialogBookJob"
      title="Đặt việc"
      @close="handleCloseBookJobDialog"
    >
      <BookJob></BookJob
    ></book-dialog>
  </section>
</template>

<script>
import BookJob from "./BookJob.vue";
export default {
  components: {
    BookJob,
  },
  data() {
    return {
      showDialogBookJob: false,
      imageUrl: [
        "../assets/image/worker-1.png",
        "../assets/image/worker-2.png",
        "../assets/image/worker-3.png",
        "../assets/image/worker-4.png",
        "../assets/image/worker-5.png",
      ],
      isLoading: false,
    };
  },
  methods: {
    async loadJobService() {
      console.log("load job service");
      this.isLoading = true;
      try {
        await this.$store.dispatch("jobs/getJobService");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleBookJobDialog() {
      this.showDialogBookJob = true;
    },
    handleCloseBookJobDialog() {
      this.showDialogBookJob = false;
    },
  },
  created() {
    this.loadJobService();
  },
};
</script>

<style scoped>
.fixed-btn {
  position: fixed;
  bottom: 10rem;
  right: 20px;
  padding: 10px 20px;
}
</style>
