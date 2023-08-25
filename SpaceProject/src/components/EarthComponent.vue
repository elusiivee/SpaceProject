<script>
import $ from 'jquery';

$(function(){
  $('#datepicker').datepicker();
});

export default {
  data() {
    return {
      earthData: [],
      year: '',
      month: '',
      day: ''
    };
  },
  methods: {
    fetchData() {
      const apiUrl = "your_api_url_here"; // Replace with the actual API URL

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const importantData = data.results;
          this.earthData = [];
          this.getValue(importantData);
          console.log(importantData);
        })
        .catch(error => {
          console.error("Fetch error:", error);
        });
    },
    getdata(){

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
        <h1 class="boldtext normal_text">NASA's Technology Transfer Program</h1>
            
        <p class="normal_text">innovations forged in the crucible of exploration and discovery are seamlessly integrated into the fabric of our daily lives. This program exemplifies NASA's dedication to the broader public, making its rich patent portfolio available for the benefit of the United States' citizens. By fostering partnerships and entering into licensing agreements with various industries, these patents become the bedrock upon which a thriving economy is built, jobs are created, and the overall quality of life is elevated.</p>

        <p class="normal_text">At its core, this program epitomizes the spirit of pioneering research. It bridges the gap between the frontiers of space and the realms of practical application, ensuring that the monumental investments made by NASA in pushing the boundaries of knowledge find resonating echoes in the advancement of our society. These innovations, often birthed in the pursuit of understanding the cosmos, don a new role as catalysts for transformative change in sectors ranging from technology and healthcare to transportation and energy.</p>

        <div class="orange-line"></div>
    </div> 

    <section class="container normal_text">
    <form class="row">
      <label for="year" class="col-1 col-form-label">Year</label>
      <div class="col-3">
        <input type="text" placeholder="2023" class="form-control" id="year" v-model="year" pattern="^\d{4}$" required>
      </div>
      <label for="month" class="col-1 col-form-label">Month</label>
      <div class="col-3">
        <input type="text" placeholder="01-12" class="form-control" id="month" v-model="month" pattern="^(0[1-9]|1[0-2])$" required>
      </div>
      <label for="day" class="col-1 col-form-label">Day</label>
      <div class="col-3">
        <input type="text" placeholder="01-31" class="form-control" id="day" v-model="day" pattern="^(0[1-9]|[12][0-9]|3[01])$" required>
      </div>
      <button class="btn btn-primary" @click="saveDate" style="margin-top: 1rem;">Save</button>
    </form>
  </section>

</div>    
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;700&family=Trirong:wght@400;700&display=swap');

input:invalid {
  border-color: red;
}

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

  /* background-image: url('./icons/bdstarsdark2.jpg') ; */

  background-size: 100% ;
  background: #1A1C22;
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
header {
  text-align: center;
  width: 100%;
  height: 50rem;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 10%;
  color: rgb(220, 120, 0);
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
  color: rgb(220, 120, 0);
  margin-bottom: 2.5rem;
}
.orange-line {
    height: 2px;
  width: 100%; /* To span the entire width */
  background-color: rgb(220, 120, 0);
  margin: 30px 0px 30px 0px; /* Adjust the margin as needed */
}
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}


</style>