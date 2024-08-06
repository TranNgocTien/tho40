<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #26a653;
  border: 1px solid #26a653;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: all 0.3s ease-out;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #22954b;
  border-color: #22954b;
}

.flat {
  background-color: transparent;
  color: #3caf64;
  border: none;
  transition: all 0.3s ease-out;
}

.outline {
  background-color: transparent;
  border-color: #22954b;
  color: #22954b;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #67c187;
  color: white;
}
</style>
