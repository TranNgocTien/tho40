import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BookDialog from "./components/ui/BookDialog.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import {} from "@fortawesome/free-regular-svg-icons";

/* import specific icons */

import {
  faGear,
  faUser,
  faWallet,
  faCheck,
  faSnowflake,
  faUsersGear,
  faScrewdriverWrench,
  faDroplet,
  faBroom,
  faComputer,
  faChevronLeft,
  faSignOut,
  faChevronRight,
  faUserXmark,
  faCircleInfo,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */

library.add(
  faUser,
  faGear,
  faScrewdriverWrench,
  faWallet,
  faCheck,
  faUsersGear,
  faSnowflake,
  faDroplet,
  faBroom,
  faComputer,
  faChevronLeft,
  faChevronRight,
  faSignOut,
  faUserXmark,
  faCircleInfo,
  faChartSimple
);

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-dialog", BaseDialog);
app.component("book-dialog", BookDialog);
app.component("base-spinner", BaseSpinner);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount("#app");
