<script>
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
    data() {
    return {

      roverphoto: [],
      year: '',
      month: '',
      day: ''
    };
  },
    methods: {
    toHomePage() {
      this.$router.push('/');
    },
    async fetchData() {
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.year}-${this.month}-${this.day}&api_key=eJMyDTpOHHfmxGjf8yuuWMnfDxZIMuI3pk56Nh8U`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();                           //whole array
      console.log(data);
      this.roverphoto=[] 
      for (let value in data.photos) {
        const imgSrc = data.photos[value].img_src;
        this.roverphoto.push({ img: imgSrc });
      }
      console.log(this.roverphoto);                               //image link
                                             //clear array

}

}
}

</script>

<template>
  <div class="my-body">
    <nav class="main-nav">
      <div class="nav-bg"></div>
      <ul>
        <li><a href="" @click="toHomePage()">Home</a></li>
        <li><a href="">About</a></li>
      </ul>
    </nav>
    <header>
      <div class="overlay">
        <p style="margin-top: 10rem;">Mars Rover</p>
      </div>
    </header>

    <div class="content-wrapper">
      <h1 class="boldtext normal_text" style="margin-top: 2rem;">NASA's Technology Transfer Program</h1>
      
      <p class="normal_text">The Mars Rover API offers a unique opportunity to explore the Red Planet through the lens of NASA's Mars rovers: Curiosity, Opportunity, and Spirit. These robotic explorers have captured a treasure trove of images during their missions, unveiling the mysteries of Mars one photograph at a time. The API, thoughtfully maintained by Chris Cerami, serves as a gateway for developers, educators, and citizen scientists to access this wealth of visual data.</p>

      <p class="normal_text">Each of the Mars rovers has its own dedicated repository of photos stored in the database. This means you can delve into the distinct journeys of Curiosity, Opportunity, and Spirit separately, examining their unique discoveries and perspectives on Mars. For those who prefer to explore Martian imagery based on Earth dates, the API has you covered. You can query for photos captured on a particular Earth date, making it convenient to correlate Mars and Earth timeframes.</p>
      <div class="orange-line"></div>


      <p class="normal_text">If you did`t get photos:
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseinfo" aria-expanded="false" >
            More info
        </button>
    </p>
    <div class="collapse" id="collapseinfo" style="margin-top: 1rem;">
        <div class="card card-body">
            <ul>
                <li>Minimal date is 2013-05-02</li>
                <li>Try to change your data. For example: day from 31 to 30</li>
            </ul> 
        </div>
    </div>
      
      <section class="container_data normal_text">
        <form class="row">
      <label for="year" class="col-2 col-form-label" >Year:</label>
      <div class="col-2">
        <input type="text" placeholder="2023" class="form-control" id="year" v-model="year" pattern="20(1[5-9]|[2-9])" required>
      </div>
      <label for="month" class="col-2 col-form-label">Month:</label>
      <div class="col-2">
        <input type="text" placeholder="01-12" class="form-control" id="month" v-model="month" pattern="^(0[1-9]|1[0-2])$" required>
      </div>
      <label for="day" class="col-2 col-form-label">Day:</label>
      <div class="col-2">
        <input type="text" placeholder="01-31" class="form-control" id="day" v-model="day" pattern="^(0[1-9]|[12][0-9]|3[01])$" required>
      </div>
      <button class="btn btn-primary" type='button' @click="fetchData()" style="margin-top: 1rem;">Save</button>
    </form>
      </section>

      <div class="gallery" >
        <div v-for="(photo, index) in roverphoto" :key="index" class="gallery-item">
            <img :src="photo.img" alt="Mars Photo" class="gallery-image" />
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
    font-size: 1.2rem;
    text-indent: 1.5em;
}

.boldtext{
  font-family: Trirong;
  font-weight: 700;  
  font-size: 2rem;
  letter-spacing: 1px;
  color: #ed902e;
}


.my-body {
  margin: 0;
  padding: 0;
  background-size: 100% ;
  background: #1A1C22;
  color: white;
  min-width: 1450px;
  justify-content: center; 
  align-items: center;
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
  color: #ed902e;
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


body{height: 900px;}
header {
  background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg');
  text-align: center;
  width: 100%;
  height: 50rem;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 10%;
  color: #ed902e;
  font-family: Trirong;
  font-weight: 700;   
  font-size: 60px;
}
header .overlay{
  width: 100%;
  height: 100%;
  padding: 50px;
  color: #FFF;
  text-shadow: 1px 1px 1px #333;
  background-image: url('./icons/MarsRover.jpg');
  background-size: 100%;
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
  width: 1400px;
  margin: 0 auto;
}

.content-wrapper h1 {
  margin: 0;
  color: #ed902e;
  margin-bottom: 2.5rem;
}



.orange-line {
    height: 2px;
  width: 100%; 
  background-color: #ed902e;
  margin: 30px 0px 30px 0px; 
}
.card{
    margin-bottom: 1rem;
    font-family: Trirong;
    font-weight: 700;  
    font-size: 1.0rem;
    background-color:transparent;
    color: #ffffff;
    border: 2px solid black;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem; 
}

.gallery-item {
  flex: 0 0 calc(25% - 20px); 
  margin: 10px;
}

.gallery-image {
    border-radius: 0.5rem;
  width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.1); 
}
.btn{
    margin-left: 1rem;
    font-family: Trirong;
    font-weight: 700;  
    font-size: 1.2rem;
    background-color: #ed902e;
    border: none;
}

.btn:hover{
  background-color: rgb(199, 120, 37)
}
</style>
