<template>
  <div class="embed-container">
    <iframe
      :src="link"
      frameborder="0"
      width="100%"
      height="100%"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.embed-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 56.25%;
}

.embed-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
