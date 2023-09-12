<script>



export default {

  data() {
    return {

      DayPhotoTD: [],
      DayPhotoDate: [],
      year: '',
      month: '',
      day: ''
    };
  },
  methods: {
    async fetchCurrentData() {
      console.log('API Key:', this.apiKey);
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=XQao0XpxPdsCgN0lTvFCKncPOo01fX4z1frh3nE1`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();                           //whole array
      this.DayPhotoTD=[]                                               //clear the array
      this.DayPhotoTD.push({
        title:data.title,
        explanation:data.explanation,
        image:data.hdurl
      })
      console.log(this.DayPhotoTD);
    },
    async fetchDateData() {
      
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=eJMyDTpOHHfmxGjf8yuuWMnfDxZIMuI3pk56Nh8U&date=${this.year}-${this.month}-${this.day}`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();                           //whole array
      this.DayPhotoDate=[]                                               //clear the array
      this.DayPhotoDate.push({
        title:data.title,
        explanation:data.explanation,
        image:data.hdurl
      })
      console.log(this.DayPhotoDate);
    },

    toHomePage() {
      this.$router.push('/');
    },
  }
};



</script>

<template>

<div class="my-body">

    
    <header>
    <div class="overlay">
        <p style="margin-top: 10rem ;">ASTRONOMY PICTURES</p>
        </div>
    </header>

    <div class="content-wrapper ">
        <h1 class="boldtext normal_text" style="margin-top: 2rem;">Astronomy Picture of the Day</h1>
        <img src="./icons/astro_poly.png" alt="Animated astronaut" class="spaceman">
        <p class="normal_text">At the heart of the APOD website lies a treasure trove of celestial imagery and invaluable metadata, meticulously curated to provide an enriching experience for its visitors. This endpoint has been designed to make this extraordinary content easily accessible for a myriad of purposes beyond its original showcase.</p>

        <p class="normal_text">By structuring APOD's imagery and metadata through this endpoint, developers and creators are empowered to unleash their creativity, repurposing this cosmic visual and informational wealth in innovative and diverse applications. Whether it's integrating APOD's awe-inspiring images into educational tools, scientific research, or personal projects, the possibilities are as boundless as the universe itself.</p>


        
        <!-- first  collapse -->
        <div class="currentPT_container" style="margin: 3rem 0rem 3rem 0rem;">
            <p class="normal_text">Today's photo
            </p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#currentday" aria-expanded="false" style="padding: 0.2rem 2em 0.2rem 2rem;" >
                <img src="./icons/arrow_down.png" style="width: 15px; height: 15px; " alt="Arrow down">
            </button>
        
            <div class="collapse" id="currentday" style="margin-top: 1rem;">
                <div class="card">
                    <div class="container_pict">
                        <button class="btn btn-primary" type='button' @click="fetchCurrentData()" style="margin-top: 1rem;">get photo</button>
                        <div v-for="(item, index) in DayPhotoTD" :key="index">
                            <h2 style="margin-top: 1rem;">{{ item.title }}</h2>
                            <p>{{ item.explanation }}</p>
                            <img :src="item.image" class="planet_image" :alt="item.title">
                            <div class="nasa_link" style="text-align: center;">Source: <a  href="https://api.nasa.gov/" style="color: #ed902e;">NASA api</a></div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>


        <!-- second collapse -->
        <div class="currentPT_container">
            <p class="normal_text">Photo by date
            </p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#dateday" aria-expanded="false" style="padding: 0.2rem 2em 0.2rem 2rem;" >
                <img src="./icons/arrow_down.png" style="width: 15px; height: 15px; " alt="arrow down">
            </button>
        
          <div class="collapse " id="dateday" style="margin-top: 1rem;">
              <div class="card">
                  <div class="container_pict" >
                    <div class="row input_text" >
                          <label for="year" class="col-4 col-form-label" >Year:</label>
                          <label for="month" class="col-4 col-form-label">Month:</label>
                          <label for="day" class="col-4 col-form-label">Day:</label>
                        </div>
                      <section class="container_data normal_text">
                        
                          <form class="input_row">
                          
                          
                              <input type="text" placeholder="2023" class="form-control" id="year" v-model="year" pattern="20(1[5-9]|[2-9])" required>
                          
                          
                          
                              <input type="text" placeholder="01-12" class="form-control" id="month" v-model="month" pattern="^(0[1-9]|1[0-2])$" required>
                          
                          
                          
                              <input type="text" placeholder="01-31" class="form-control" id="day" v-model="day" pattern="^(0[1-9]|[12][0-9]|3[01])$" required>
                          
                          
                          </form>
                          <button class="btn btn-primary" type='button' @click="fetchDateData()" style="margin-top: 1rem;">get photo</button>
                      </section>

                        
                            <div class="card">

                                    <div class="normal_text" v-for="(item, index) in DayPhotoDate" :key="index">
                                        <h2 style="margin-top: 1rem;">{{ item.title }}</h2>
                                        <p>{{ item.explanation }}</p>
                                        <img :src="item.image" class="planet_image" :alt="item.title">
                                        <div class="nasa_link" style="text-align: center;">Source: <a  href="https://api.nasa.gov/" style="color: #ed902e;">NASA api</a></div>
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
  justify-content: center; 
  align-items: center;
  background-size: 100% ;
  /* background: #1A1C22; */
  background: rgb(187,116,41);
  background: linear-gradient(220deg, rgba(187,116,41,1) 0%, rgba(26,28,34,1) 48%);
  color: white;

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
    padding: 0 20px
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
    border: none;
    text-align: center;
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
.currentPT_container{
    text-align: center;
    justify-content: center; 
    align-items: center;
    border: 2px solid #ed902e;
    border-radius: 1rem;
    padding: 1rem 0rem 1rem 0rem;
}
.planet_image{
    width: 80%;
    border-radius: 2rem;
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
.spaceman {
  position: absolute;
    left: 80%;
    transform: translateX(-100%) translateY(-80%) ;    
    width: 200px;    
    animation: spaceman-move 7s infinite ease-in-out;

}
.form-control{
  float: left;
  width: 32%;
  text-align: center;
  margin: 0rem 0.2rem ;
  text-decoration: none;

}
@keyframes spaceman-move {
    from{
        transform: translateX(-50%) translateY(-90%);
    }

    50%{
        transform: translateX(-60%) translateY(-110%);
    }

    to{
        transform: translateX(-50%) translateY(-90%);
    }
}


@media screen and (max-width: 600px) {
  .spaceman {
    display: none;
  }
  .input_text{
    display: none;
  }
  .form-control {
    float: none;
    width: 100%;
  }

  
}



.input_text{
  width: 60%;
  margin: 0 auto;
}

.nasa_link{
  color: white;
  font-size: 20px;
}
</style>