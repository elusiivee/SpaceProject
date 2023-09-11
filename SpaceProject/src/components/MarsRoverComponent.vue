<script>



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
      console.log('API Key:', this.apiKey);
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.year}-${this.month}-${this.day}&api_key=XQao0XpxPdsCgN0lTvFCKncPOo01fX4z1frh3nE1`;
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
    
    <header>
      <div class="overlay">
        <p style="margin-top: 10rem;">Mars Rover</p>
      </div>
    </header>

    <div class="content-wrapper">
      <h1 class="boldtext normal_text" style="margin-top: 2rem;">NASA's Technology Transfer Program</h1>
      <img src="./icons/marsrover.png" alt="animated rover" class="rover">
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

      <div class="gallery row">
      <div
        v-for="(photo, index) in roverphoto"
        :key="index"
        class="gallery-item col-lg-3 col-md-4 col-sm-6 col-12"
      >
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
  justify-content: center; 
  align-items: center;
}



body{height: 900px;}
header {
  position: absolute;
  background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg');
  text-align: center;
  width: 100%;
  height: 40%;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 10%;
  color: #ed902e;
  font-family: Trirong;
  font-weight: 700;   
  font-size: 60px;
  object-fit: cover;
}
header .overlay{
  width: 100%;
  height: 100%;
  padding: 50px;
  color: #FFF;
  text-shadow: 1px 1px 1px #333;
  background-image: url('./icons/MarsRover.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  
}
.overlay:hover{
  text-shadow: 0px 0px 20px #ed902e;
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

/* .gallery {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
} */

/* .gallery-item {
  flex: 0 0 calc(33.33% - 20px); 
  margin: 10px;
} */

.gallery-image {
  border-radius: 0.5rem;
  width: 100%;
  height: 350px; 
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
.rover {
  position: absolute;
    left: 80%;
    transform: translateX(70%) translateY(-80%) ;    
    width: 200px;    
    animation: rover-move 7s infinite ease-in-out;
    
}
@keyframes rover-move {
    from{
        transform: translateX(70%) translateY(-100%);
    }

    50%{
        transform: translateX(0%) translateY(-100%);
    }

    to{
        transform: translateX(70%) translateY(-100%);
    }
}

</style>
