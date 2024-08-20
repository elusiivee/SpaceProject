<template>
<footer class="container_footer bg-dark text-center text-white">

<div class="container p-4 pb-0">

  <section class="mb-4">

    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="fab fa-facebook-f"><img class="footer-icon" src="./icons/icons8-github.svg" alt="Github icon"></i
    ></a>


    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="fab fa-twitter"><img class="footer-icon" src="./icons/icons8-instagram.svg" alt="INstagram icon"></i
    ></a>


    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="fab fa-google"><img class="footer-icon" src="./icons/icons8-telegram.svg" alt="Telegram icon"></i
    ></a>

    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="fab fa-instagram"><img class="footer-icon" src="./icons/icons8-facebook.svg" alt="Facebook icon"></i
    ></a>

    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="fab fa-linkedin-in"><img class="footer-icon" src="./icons/icons8-twitter.svg" alt="Twitter icon"></i
    ></a>


    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i class="fab fa-github"><img class="footer-icon" src="./icons/icons8-linkedin.svg" alt="Linkedin icon"></i
    ></a>
  </section>
  
</div>

<div class="nasa_link p-3 normal_text" style="background-color: rgba(0, 0, 0, 0.2);">Source: <a  href="https://api.nasa.gov/" style="color: #ed902e;">NASA api</a></div>
<div class="nasa_link p-3" style="background-color: rgba(0, 0, 0, 0.2);"></div>
</footer>
</template>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');


.normal_text{
  font-family: 'Orbitron', sans-serif;
    font-weight: 700;  
    font-size: 1rem;
    text-indent: 1.5em;
    line-height: 2; 
}

.boldtext{
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;  
  font-size: 2rem;
  letter-spacing: 1px;
  color: #ed902e;
}
.container_footer{
  width: 100%;
}
.m-1{
  border-radius: 5rem;
  padding: 0.3rem;
  border-color: transparent;
}
.m-1:hover{
  background-color: #ed902e;
}
.footer-icon{
  width: 35px;
  height: 35px;
}
.nasa_link{
  color: white;
  font-size: 20px;
}

</style>