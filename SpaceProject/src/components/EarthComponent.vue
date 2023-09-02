<script>

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// console.log(year,month);
// let DaysInThisMonth = function(year,month){
//     return new Date(year,month, 0).getDate();

export default {
  data() {
    return {

      earthDataimg: [],
      earthimg: [],
      year: '',
      month: '',
      day: ''
    };
  },
  methods: {
    async fetchData() {
      const apiUrl = `https://api.nasa.gov/EPIC/api/natural/date/${this.year}-${this.month}-${this.day}?api_key=eJMyDTpOHHfmxGjf8yuuWMnfDxZIMuI3pk56Nh8U`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();                           //whole array
      console.log(data);

      for (let value in data) {                     
        this.earthDataimg.push(data[value].image);
      }
      console.log(this.earthDataimg);                               //image name

      this.earthimg = [];
      for (const name of this.earthDataimg) {
        const imgurl = `https://epic.gsfc.nasa.gov/archive/natural/${this.year}/${this.month}/${this.day}/jpg/${name}.jpg`;
        this.earthimg.push(imgurl);
      }
      this.earthDataimg = [];             //clean
      console.log(this.earthimg);                                    //image url
    },
    toHomePage() {
      this.$router.push('/');
    },
    maxDate() {                                                      // max date is 27 days less than the current one
      let date = new Date();
      date.setDate(date.getDate() - 27);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
  }
};



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
        <p style="margin-top: 10rem ;">Earth</p>
        </div>
    </header>

    <div class="content-wrapper ">
        <h1 class="boldtext normal_text" style="margin-top: 2rem;">The Earth Polychromatic Imaging Camera</h1>
            
        <p class="normal_text">The Earth Polychromatic Imaging Camera (EPIC) API offers a remarkable opportunity to access and delve into the wealth of data collected by the EPIC instrument aboard the Deep Space Climate Observatory (DSCOVR) spacecraft. Situated at the Earth-Sun Lagrange point, this innovative instrument provides an unparalleled vantage point for capturing daily imagery of our planet in its entirety.</p>

        <p class="normal_text">One of EPIC's most captivating features is its ability to capture full disc imagery of Earth. This means that the instrument can capture the entire sunlit side of our planet in a single frame, showcasing the intricate patterns of clouds, oceans, landmasses, and the ever-changing interplay of sunlight and shadows across its surface. This comprehensive perspective aids in monitoring weather patterns, climate changes, and even natural events like volcanic eruptions, hurricanes, and forest fires.</p>

        <div class="orange-line"></div>
        

        <p class="normal_text">If you did`t get photos:
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseinfo" aria-expanded="false" >
              More info
          </button>
        </p>
        <div class="collapse" id="collapseinfo" style="margin-top: 1rem;">
            <div class="card card-body">
                  <p class="normal_text">The minimal data is 2015-08-30</p>
                  <p class="normal_text">The maximal date is {{ maxDate() }}</p>
                  <ul class="normal_text">
                    <li>try to change your data. For example: day from 31 to 30</li>
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


  <div class="container_carousel" v-if="earthimg.length>0">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
    <div v-for="(img, index) in earthimg" :key="index" class="carousel-item" :class="{ active: index === 0 }">
        <img :src="img" class="planet_image" alt="planet_photo">
    </div>
</div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous </span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  </div> 
  <div class="orange-line" style="margin: 30px 0px 0px 0px"></div>
</div>    
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@400;700&display=swap');

input:invalid {
  border-color: red;
}

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


  background-size: 100% ;
  background: #1A1C22;
  color: white;
  min-width: 1450px;

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
header {
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
  background-image: url('./icons/earth_main.jpg');
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
  width: 80%;
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
.container_data {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.container_carousel{
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
}
.carousel-item img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto; 
  margin: 0 auto;
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