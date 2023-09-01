<script>
export default {
  methods: {
    scrollfc() {
      const topbtn = document.getElementById("btn-to-top");
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        topbtn.style.display = "block";
      } else {
        topbtn.style.display = "none";
      }
    },
    backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollfc);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollfc);
  },
};
</script>

<template>
  <div>
    <button id="btn-to-top" @click="backToTop" class="btn-to-top"><img src="./icons/totopbtn.png" style="height: 100px; width: 100px; object-fit: contain;" alt=""></button>
  </div>
</template>

<style>
.btn-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
</style>