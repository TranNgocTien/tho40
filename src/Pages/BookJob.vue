<template>
  <div>
    <base-dialog :show="!!isError" title="Lỗi đăng việc" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Đang xác thực..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Tên chủ đơn hàng:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-control">
        <label for="address">Địa chỉ của bạn:</label>
        <input type="text" id="address" v-model="address" />
      </div>
      <div class="form-control">
        <label for="phone">Số điện thoại liên hệ:</label>
        <input type="tel" id="phone" v-model="phone" />
      </div>
      <div class="form-control">
        <label for="datetime">Thời gian:</label>
        <input
          type="datetime-local"
          id="datetime"
          :min="formattedDateTime"
          v-model="formattedDateTime"
        />
      </div>
      <div class="form-control">
        <label for="service"> Dịch vụ:</label>
        <button
          @click="toggleDropdown"
          id="service"
          class="options-service-btn"
        >
          Chọn dịch vụ <i class="arrow down"></i>
        </button>
        <div v-if="isOpen && !isJobItemOpen" class="dropdown-menu">
          <base-spinner v-if="isJobServiceLoading"></base-spinner>
          <div
            v-else
            v-for="service in jobService"
            :key="service.id"
            class="options-service"
            @click="handleJobservice(service.code)"
          >
            <div class="options-service-img">
              <img :src="service.img" :alt="service.name" />
            </div>
            <p class="options-service-name">{{ service.name }}</p>
          </div>
        </div>
        <div v-if="isOpen && isJobItemOpen" class="dropdown-menu">
          <base-button mode="flat" @click="handleBackJobItem"
            >Quay lại</base-button
          >
          <div v-for="item in jobItem" :key="item.id" class="options-service">
            <div class="options-service-img">
              <img :src="item.img" :alt="item.name" />
            </div>
            <p class="options-service-name">{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div class="form-control">
        <label for="description">Mô tả:</label>
        <textarea
          rows="5"
          type="tel"
          id="description"
          v-model="description"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      address: "",
      phone: "",

      description: "",
      isJobItemOpen: false,
      isOpen: false,
      isLoading: false,
      isJobServiceLoading: false,
    };
  },

  computed: {
    ...mapGetters("jobs", ["error", "isError"]),
    jobService() {
      return this.$store.getters["jobs/jobService"];
    },
    jobItem() {
      return this.$store.getters["jobs/jobItem"];
    },
  },
  created() {
    this.currentdatetime = this.getCurrentTime();
    console.log(this.currentdatetime);
    console.log(this.jobService);
  },
  setup() {
    const formattedDateTime = ref("");

    const formatDateTime = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      // Format to 'YYYY-MM-DDTHH:MM'
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const updateDateTime = () => {
      const now = new Date();
      formattedDateTime.value = formatDateTime(now);
    };

    onMounted(() => {
      updateDateTime();
    });

    return {
      formattedDateTime,
    };
  },

  methods: {
    async handleJobservice(id) {
      this.isJobServiceLoading = true;
      this.isJobItemOpen = false;
      try {
        await this.$store.dispatch("jobs/getJobItem", { id: id });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isJobServiceLoading = false;
      this.isJobItemOpen = true;
    },

    handleBackJobItem() {
      this.isJobItemOpen = false;
    },

    getCurrentTime() {
      const now = new Date();
      return this.formatDateTime(now);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    formatDateTime(date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

      return `${day}/${month}/${year}, ${formattedHours}:${minutes} ${ampm}`;
    },

    async submitForm() {
      let isSuccess = false;
      this.formIsValid = true;
      if (this.phone === "" || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        isSuccess = await this.$store.dispatch("auth/signIn", {
          phone: this.phone,
          password: this.password,
        });
        if (isSuccess === true) {
          this.$router.replace("/home");
        }
      } catch (err) {
        this.error = err.message || "Đăng nhập thất bại,vui lòng thử lại sau";
      }

      this.isLoading = false;
    },
    handleError() {
      this.$store.dispatch("jobs/cleanError", {
        error: null,
      });
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 1.5rem 0;
}
form {
  margin: 1rem;
  padding: 1rem;
}
label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  font-size: 1.3rem !important;
  height: 3.5rem;
  font: inherit;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 11px;
  padding-left: 1rem;
}
input:focus,
textarea:focus {
  border-color: #26a653;
  background-color: white;
  outline: none;
  padding-left: 1rem;
}
input[id="description"] {
  height: 3.2rem;
}

.options-service {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3rem;
  border-radius: 11px;
  padding: 0.5rem;
  transition: all 0.3s ease-out;
}
.options-service:hover {
  background-color: #e9f6ee;
}
.options-service-img img {
  width: 3rem;
  height: 3rem;
}
.options-service-img {
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4eddd;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.options-service-name {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
}
.dropdown-menu {
  transition: all 0.3 ease-out;
  display: block;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 1.2rem 2.4rem;
  border-radius: 11px;
  transition: 0.3s ease-out;
  width: 90%;
  z-index: 1;
  padding: 1rem;

  right: 47%;
  transform: translateX(50%);
}

.options-service-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: black;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 11px;
}

.arrow {
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
