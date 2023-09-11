<script>




export default {
  methods: {
    onTechclink() {
      this.$router.push('/technology');
    },
    onEarthlink() {
      this.$router.push('/earth');
    },
    onMarsRoverlink() {
      this.$router.push('/marsrover');
    },
    onAstrPict() {
      this.$router.push('/astrpict');
    },
  },
};


</script>

<template>
    
    
    
<div class="my-body">
    <NavBar />


<div class="mainPlanet">
    <video autoplay loop muted plays-inline >
      <source src='./icons/videomain.mp4' type="video/mp4" >
      
    </video>
    <div class="Head">LET`s DISCOVER THE SPACE</div>
  </div>
  <div class="orange-line" style="margin: 0px 0px 30px 0px;"></div>
  <div class="content-wrapper normal_text">
  <h1 class="boldtext" style="margin-top: 2rem;">Exploring the Cosmos: Unveiling the Wonders of Space</h1>
    
  <p>At the heart of our space exploration journey lies an insatiable curiosity about the universe's most perplexing enigmas. The cosmos, with its boundless expanse, holds within it a treasure trove of unanswered questions that have captivated humanity for centuries.</p>

  <p>Dive into our comprehensive collection of articles, each meticulously crafted to demystify the complexities of astrophysics, cosmology, and the fundamental forces shaping the universe. From the mind-bending concepts of black holes and dark matter to the elegant dance of galaxies across the cosmic canvas, we break down intricate ideas into easily digestible insights that cater to both seasoned astrophysicists and enthusiastic learners alike.</p>

  <p>Stay up to date with the forefront of scientific progress through our real-time news updates. Uncover the latest breakthroughs in space exploration, technological advancements, and theoretical revelations that redefine our understanding of the universe. Whether it's the discovery of a new exoplanet with potential habitability or insights into the origins of the universe itself, we're your trusted source for staying informed about the dynamic field of space science.</p>

  <div class="orange-line" style="margin: 30px 0px 30px 0px;"></div>

     <div class="row">
    <div class="col-sm-12 col-md-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/asteroids.jpg" alt="Asteroids photo. Page for more information about Space">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button class="cart_btn boldtext" @click="onAstrPict()">More Info</button>
                </div>
              </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6">
      <div class="boldtext" style="margin-top: 7rem;">Astronomy Picture</div>
      <div class="normal_text" style="margin-top: 3rem;">The Astronomy Picture of the Day (APOD) stands as a shining star among NASA's online offerings. Its popularity is not confined within the realms of space enthusiasts and scientists but extends far beyond, akin to the widespread appeal of a viral Justin Bieber video. This captivating website has succeeded in captivating the imagination of people worldwide.</div>
      <div><img src="./icons/moon.png" alt="animated moon" class="moon"></div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12 col-md-6">
      <div class="boldtext" style="margin-top: 7rem;">OUR EARTH</div>
      <div class="normal_text" style="margin-top: 3rem;">Nestled within the realms of cutting-edge space exploration, the EPIC API emerges as a formidable source of enlightenment, unraveling the mysteries of Earth's beauty from a vantage point like no other. Facilitating access to a trove of captivating daily imagery, this API unveils a remarkable chronicle of our planet as seen through the eyes of the Earth Polychromatic Imaging Camera (EPIC) instrument aboard the DSCOVR spacecraft.</div>
    </div>
    <div class="col-sm-12 col-md-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/earth.png" alt="Earth photo. Page for more information about Earth">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button class="cart_btn boldtext" @click="onEarthlink()">More Info</button>
                </div>
              </div>
        </div>
      </div>
      

    </div>
  </div>

  <div class="row">
    <div class="col-sm-12 col-md-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/MarsRover.jpg" alt="Mars photo. Page for more information about Mars">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button class="cart_btn boldtext" @click="onMarsRoverlink()">More Info</button>
                </div>
              </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6">
      <div class="boldtext" style="margin-top: 7rem;">Mars Rover</div>
      <div class="normal_text" style="margin-top: 3rem;">The captivating images captured by NASA's Curiosity, Opportunity, and Spirit rovers on Mars are opening new windows of exploration and understanding into the mysterious Red Planet. These rovers have journeyed across vast Martian landscapes, documenting the terrain, geological formations, and even the occasional dust storm. Now, in a stride toward fostering collaborative research and educational engagement, these invaluable images are being made more accessible than ever before, catering to the needs of developers, educators, and citizen scientists alike.</div>

    </div>
  </div>

  <div class="row">
    <div class="col-sm-12 col-md-6">
      <div><img src="./icons/spaceshuttle.png" alt="animated shuttle" class="spaceshuttle"></div>
      <div class="boldtext" style="margin-top: 7rem;">NASA's Technology Transfer Program</div>
      <div class="normal_text" style="margin-top: 3rem;">NASA's Technology Transfer Program is a groundbreaking initiative that plays a pivotal role in bridging the gap between space exploration and real-world applications. Born out of NASA's commitment to advancing scientific knowledge and benefiting society at large, the program aims to ensure that the cutting-edge technologies and innovations developed for space missions find practical applications here on Earth.</div>
    </div>
    <div class="col-sm-12 col-md-6">
      <div class="cards">
        <div class="content">
              <div class="back">
                <div class="back-content cartPhoto">
                    <img src="./icons/cosmonauts.jpg" alt="Astronaut photo. Page for more information about technology">
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                    <button class="cart_btn boldtext" @click="onTechclink()">More Info</button>
                </div>
              </div>
        </div>
      </div>
      

    </div>
  </div>
</div>
<div class="orange-line" style="margin: 30px 0px 0px 0px"></div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@400;700&display=swap');

.normal_text{
  font-family: Trirong;
    font-weight: 700;  
    font-size: 1.2rem;
    text-indent: 1.5em;
}

.boldtext{
  font-family: Trirong;
  font-weight: 700;  
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: #ed902e;
}


.my-body {
  margin: 0;
  padding: 0;
  background-image: url('./icons/bdstarsdark2.jpg');
  background-size: 110% ;
  /* background: #1A1C22; */
  justify-content: center; 
  align-items: center;
  color: white;


}



.Head {
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: Trirong;
  font-weight: 700;   
  font-size: 60px;
  z-index: 1;
}
.Head:hover{
  text-shadow: 0px 0px 20px #ed902e;
}

.mainPlanet {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(50, 50, 50);
  background: url(./icons/videomain.mp4);
  background-size: 130%;
  object-fit: contain;
  overflow: hidden;
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  max-width: 100%; 
  width: 80%;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper h1 {
  margin: 0;
  color: #ed902e;
  margin-bottom: 2.5rem;
}



.orange-line {
    height: 2px;
  width: 100%; 
  background-color:  #ed902e;
}

/* carts */
.row{
  margin-top: 2rem;
}
.cards {
  overflow: visible;
  width: 100%;
  height: 600px;
  border-radius: 2rem;
}
.cards img{
  width: 99%;
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
.spaceshuttle{
  position: absolute;
    left: 30%;
    transform: translateX(-10%) translateY(10%)  rotate(70deg);    
    width: 150px;    
    animation: roket-move 10s infinite ease-in-out;
    
}
.moon {
  position: absolute;
    left: 80%;
    transform: translateX(-10%) translateY(-30%) ;    
    width: 200px;    
    animation: moon-move 10s infinite ease-in-out;
    
}

@keyframes moon-move {
    from{
        transform: translateX(-10%) translateY(10%);
    }

    50%{
        transform: translateX(-90%) translateY(-15%);
    }

    to{
        transform: translateX(-10%) translateY(10%);
    }
}
@keyframes roket-move {
    from{
        transform: translateX(-10%) translateY(-30%)  rotate(50deg);
    }

    50%{
        transform: translateX(-200%) translateY(-25%)  rotate(70deg);
    }

    to{
        transform: translateX(-10%) translateY(-30%)  rotate(50deg);
    }
}
</style>