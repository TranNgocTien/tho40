<template>
  <the-header v-if="this.$route.path != '/auth'"></the-header>
  <main>
    <router-view></router-view>
  </main>
  <the-footer v-if="this.$route.path != '/auth'"></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { register } from "swiper/element/bundle";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    register();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Rubik", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
}
/***********************/
/**** General component *****/
/***********************/
.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;
}
.grid {
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
}

.grid:not(:last-child) {
  margin-bottom: 9.6rem;
}
.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}
.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}
.grid--4-cols {
  grid-template-columns: repeat(4, 1fr);
}
.grid--5-cols {
  grid-template-columns: repeat(5, 1fr);
}

.grid--center-v {
  align-items: center;
}

.heading-primary,
.heading-secondary,
.heading-tertiary {
  font-weight: 600;
  color: #041108;
  letter-spacing: 0.5px;
}
.heading-primary {
  font-size: 4.8rem;
  line-height: 1.05;

  margin-bottom: 3.2rem;
}
.heading-secondary {
  font-size: 4.4rem;
  line-height: 1.2;
  margin-bottom: 9.6rem;
}

.heading-tertiary {
  font-size: 3.6rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;
}
.subheading {
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  color: #3caf64;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
}
.btn:link,
.btn:visited {
  display: inline-block;

  font-size: 2rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  text-decoration: none;
  transition: all 0.3s ease-out;
}

.btn--full:link,
.btn--full:visited {
  background-color: #26a653;
  color: #fff;
}
.btn--full:hover,
.btn--full:active {
  background-color: #22954b;
  color: #fff;
}

.btn--outline:link,
.btn--outline:visited {
  background-color: #fff;
  color: #041108;
}
.btn--outline:hover,
.btn--outline:active {
  background-color: #e9f6ee;
  background-color: #bee4cb;
  color: #041108;
  box-shadow: inset 0 0 0 3px #fff;
}

.margin-right-sm {
  margin-right: 1.6rem !important;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.list-item {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.list-icon {
  width: 3rem;
  height: 3rem;
  color: #26a653;
}

.margin-bottom-md {
  margin-bottom: 4.8rem !important;
}
.margin-bottom-sm {
  margin-bottom: 2.4rem !important;
}
</style>
