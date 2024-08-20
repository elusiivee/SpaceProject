<script>
export default {
  methods: {
    scrollfc() {
      const topbtn = document.getElementById("btn-to-top");
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
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
    <button id="btn-to-top" @click="backToTop" class="btn-to-top">
      <img src="./icons/arrow.svg" style="height: 20px; width: 20px;" alt="Arrow to the top">to top
    </button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');


.btn-to-top {
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.4rem 1rem 0.4rem 1rem;
  position: fixed;
  bottom: 0px;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;
  background-color: #ed912e;
  border-radius: 50px 50px 0px 0px;;
  border: none;
}

.btn-to-top:hover {
  background-color: rgb(199, 120, 37);

}

</style>