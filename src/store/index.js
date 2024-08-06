import { createStore } from "vuex";
import voucherModule from "../store/modules/voucher/index";
import newsModule from "../store/modules/news/index";
import stuffsModule from "../store/modules/stuffs/index";
import authModule from "../store/modules/auth/index";
import jobsModule from "../store/modules/jobs/index";
const store = createStore({
  modules: {
    voucher: voucherModule,
    news: newsModule,
    stuffs: stuffsModule,
    auth: authModule,
    jobs: jobsModule,
  },
});

export default store;
