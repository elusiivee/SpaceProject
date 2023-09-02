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
    <button id="btn-to-top" class="btn-to-top btn_text" style="display: none;">
      <img src="./icons/arrow.svg" alt="" style="width: 30px;">
    </button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@700&display=swap');


.btn_text{
  font-family: Trirong;
    font-weight: 700;  
    font-size: 1.2rem;
}
.btn-to-top {
  padding: 1.5rem 0.7rem 0.7rem 1.2rem;
  position: fixed;
  bottom: 0px;
  right: 0%;
  cursor: pointer;
  background-color: #ed912e;
  border-radius: 100px 0px 0px;
  border: none;
}

.btn-to-top:hover {
  background-color: rgb(199, 120, 37);

}
</style>