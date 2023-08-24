<script>
import { RouterLink, RouterView } from 'vue-router';

import $ from 'jquery';
$(document).ready(function() {
   $(window).on('scroll', function() {
    if($(window).scrollTop() < 1000) {
      $('.mainPlanet').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
      $('.mainPlanet h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
      $('.mainPlanet h1').css('opacity', 1 - ($(window).scrollTop() * .003));
    }
     
     if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
       $('.nav-bg').removeClass('bg-hidden');
       $('.nav-bg').addClass('bg-visible');
     } else {
       $('.nav-bg').removeClass('bg-visible');
       $('.nav-bg').addClass('bg-hidden');
     }
  });
});


export default {
  methods: {
    onTechclick() {
      this.$router.push('/technology');
    },
  },
};


</script>

<template>
<div class="my-body">
<nav class="main-nav">
  <div class="nav-bg"></div>
  <ul>
    <RouterLink to="/"><li><a href="">Home</a></li></RouterLink>
    
    <RouterLink to="/about"><li><a href="">about</a></li></RouterLink>
  </ul>
</nav>
<div class="mainPlanet">
  <div class="Head">Let`s discover the SPACE</div>
</div>
  <div class="content-wrapper normal_text">
  <h1 class="boldtext">Exploring the Cosmos: Unveiling the Wonders of Space</h1>
    
  <p>At the heart of our space exploration journey lies an insatiable curiosity about the universe's most perplexing enigmas. The cosmos, with its boundless expanse, holds within it a treasure trove of unanswered questions that have captivated humanity for centuries.</p>

  <p>Dive into our comprehensive collection of articles, each meticulously crafted to demystify the complexities of astrophysics, cosmology, and the fundamental forces shaping the universe. From the mind-bending concepts of black holes and dark matter to the elegant dance of galaxies across the cosmic canvas, we break down intricate ideas into easily digestible insights that cater to both seasoned astrophysicists and enthusiastic learners alike.</p>

  <p>Stay up to date with the forefront of scientific progress through our real-time news updates. Uncover the latest breakthroughs in space exploration, technological advancements, and theoretical revelations that redefine our understanding of the universe. Whether it's the discovery of a new exoplanet with potential habitability or insights into the origins of the universe itself, we're your trusted source for staying informed about the dynamic field of space science.</p>

  <div class="orange-line"></div>

     <div class="row">
    <div class="col-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/asteroids.jpg" alt="">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button class="cart_btn boldtext">More Info</button>
                </div>
              </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="boldtext" style="margin-top: 7rem;">Asteroids on the way</div>
      <div class="normal_text" style="margin-top: 3rem;">At the forefront of scientific exploration, the Near Earth Object Web Service (NeoWs) stands as a testament to NASA's unwavering commitment to unraveling the mysteries of the cosmos. With its robust capabilities and user-friendly interface, NeoWs serves as a beacon of knowledge, illuminating the enigmatic world of near-earth asteroids. These celestial wanderers, shrouded in intrigue, hold profound implications for our understanding of space and its delicate interplay with our own planet.</div>

    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="boldtext" style="margin-top: 7rem;">OUR EARTH</div>
      <div class="normal_text" style="margin-top: 3rem;">Nestled within the realms of cutting-edge space exploration, the EPIC API emerges as a formidable source of enlightenment, unraveling the mysteries of Earth's beauty from a vantage point like no other. Facilitating access to a trove of captivating daily imagery, this API unveils a remarkable chronicle of our planet as seen through the eyes of the Earth Polychromatic Imaging Camera (EPIC) instrument aboard the DSCOVR spacecraft.</div>
    </div>
    <div class="col-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/earth.png" alt="">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button class="cart_btn boldtext">More Info</button>
                </div>
              </div>
        </div>
      </div>
      

    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/MarsRover.jpg" alt="">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button class="cart_btn boldtext">More Info</button>
                </div>
              </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="boldtext" style="margin-top: 7rem;">Mars Rover</div>
      <div class="normal_text" style="margin-top: 3rem;">The captivating images captured by NASA's Curiosity, Opportunity, and Spirit rovers on Mars are opening new windows of exploration and understanding into the mysterious Red Planet. These rovers have journeyed across vast Martian landscapes, documenting the terrain, geological formations, and even the occasional dust storm. Now, in a stride toward fostering collaborative research and educational engagement, these invaluable images are being made more accessible than ever before, catering to the needs of developers, educators, and citizen scientists alike.</div>

    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="boldtext" style="margin-top: 7rem;">NASA's Technology Transfer Program</div>
      <div class="normal_text" style="margin-top: 3rem;">NASA's Technology Transfer Program is a groundbreaking initiative that plays a pivotal role in bridging the gap between space exploration and real-world applications. Born out of NASA's commitment to advancing scientific knowledge and benefiting society at large, the program aims to ensure that the cutting-edge technologies and innovations developed for space missions find practical applications here on Earth.</div>
    </div>
    <div class="col-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/cosmonauts.jpg" alt="">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button @click="onTechclick()" class="cart_btn boldtext" >More Info</button>
                </div>
              </div>
        </div>
      </div>
      

    </div>
  </div>
</div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@400;700&display=swap');

.normal_text{
  font-family: Trirong;
    font-weight: 700;  
    font-size: 1rem;
    text-indent: 1.5em;
}

.boldtext{
  font-family: Trirong;
  font-weight: 700;  
  font-size: 2rem;
  letter-spacing: 1px;
  color: rgb(220, 120, 0);
}


.my-body {
  margin: 0;
  padding: 0;

  background-image: url('./icons/bdstarsdark2.jpg');

  background-size: 100% ;
  /* background: #1A1C22; */
  color: white;
  min-width: 1250px;

}

.main-nav {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  font-family: Trirong;
  font-weight: 700;  
  font-size: 1.15em;
  letter-spacing: 1px;

}

nav ul {
  list-style: none;
  margin: 0;
  padding: .2em 2em;
  float: right;
}

nav ul li {
  display: inline-block;
  margin: 0;
  padding: .2em .7em;
}

nav a {
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;

}

nav a:hover {
  color: rgb(220, 120, 0);
}

.nav-bg {
    padding-bottom: 1rem;
  content: '';
  position: absolute;
  display: block;
  top: -100%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #151515;
  transition: .45s ease-in-out;
}

.bg-hidden {
  top: -100%;
  opacity: 0;
}

.bg-visible {
  top: 0;
  opacity: 1;
  height: 2.5rem;
}

.Head {
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: Trirong;
  font-weight: 700;   
  font-size: 60px;
}

.mainPlanet {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(50, 50, 50);
  background: url(./icons/mainphoto.jpg) no-repeat 50% 50%;
  background-size: 130%;
  overflow: hidden;
}

.mainPlanet h1 {
  position: absolute;
  margin-bottom: 2rem;
  top: 50%;
  left: 0;
  width: 100%;
  padding: .3em;
  font-size: 3em;
  font-weight: lighter;
}

.content-wrapper {
  width: 80%;

  padding: 1em 10%;
  box-sizing: content-box;
  
}

.content-wrapper h1 {
  margin: 0;
  color: rgb(220, 120, 0);
  margin-bottom: 2.5rem;
}



.orange-line {
    height: 2px;
  width: 100%; /* To span the entire width */
  background-color: rgb(220, 120, 0);
  margin: 30px 0px 30px 0px; /* Adjust the margin as needed */
}
/* carts */
.row{
  margin-top: 2rem;
}
.cards {
  overflow: visible;
  width: 500px;
  height: 520px;
  border-radius: 2rem;
}
.cards img{
  width: 99%; /* Make the image occupy the full width of the container */
  height: 99%;
  object-fit: cover;
}
.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
}

.front, .back {
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: ' ';
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.cards:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.cart_btn{
    position: absolute;
    bottom: 20px;
    margin: 0rem 0rem 1rem 1rem;
    width: 215px;
    height: 100px;
    cursor: pointer;
    color: #fff;
    background: #1A1C22;
    font-size: 17px;
    border-radius: 1rem;
    border: none;
}
.cart_btn:hover{

    box-shadow:  -10px -10px 20px #ad6744,
             10px 10px 20px #ff9966;
}

</style>