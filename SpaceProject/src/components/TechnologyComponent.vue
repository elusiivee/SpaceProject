<script>

import $ from 'jquery';



export default {
  computed: {
  apiKey() {
    return this.$store.state.apiKey;
  },
  },
  data() {
    return {
      cardData: [],
      currentPage: 1, 
      totalPages: 9,
    };
  },
  mounted() {
    this.getpage(this.currentPage); 
  },
  methods: {
    getpage(pageNumber) {
      this.currentPage = pageNumber;
    
    const baseUrl = "https://api.nasa.gov/techtransfer/patent/";
    const apiKey = "eJMyDTpOHHfmxGjf8yuuWMnfDxZIMuI3pk56Nh8U";
    const apiUrl = `${baseUrl}?engine&api_key=${apiKey}&page=${pageNumber}`;
    console.log(this.currentPage); 
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const importantData = data.results;
          this.cardData = [];
          this.getValue(importantData);
          console.log(importantData);
        })
        .catch(error => {
          console.error("Fetch error:", error);
        });
    },
    getValue(data) {
      for (let i = 20; i < 36; i++) {
        const item = data[i];
        const Description = item[3].replace(/<\/?span[^>]*>/g, ''); // Remove <span> tags
        const topik = item[3].replace(/<\/?span[^>]*>/g, ''); // Remove <span> tags
        this.cardData.push({
          head: topik,
          description: Description,
          image: item[10],
          showModal: false, 
        });
        ;
      }
    },
    limit(text, number){
        if (text.length>number){
          return text.slice(0,number)+'...';
        }
        else{
          return text;
        }
    },
    openModal(card) {
      card.showModal = true;
    },
    closeModal(card) {
      card.showModal = false;
    },
    toHomePage() {
      this.$router.push('/');
    },
  },
}

//create max length of string

let maxLength = 15;
$('description').keyup(function() {
  let textlen = maxLength - $(this).val().length;
  $('#maxchars').text(textlen);})
</script>

<template>
<div class="my-body">

<header>
  <div class="overlay">
    <p style="margin-top: 10rem ;">SPACE TECHNOLOGY</p>
    </div>
</header>

<div class="content-wrapper ">
  <h1 class="boldtext normal_text" style="margin-top: 2rem;">NASA's Technology Transfer Program</h1>
  <img src="./icons/astro_poly.png" alt="animated astronomer" class="spaceman">
  <p class="normal_text">Innovations forged in the crucible of exploration and discovery are seamlessly integrated into the fabric of our daily lives. This program exemplifies NASA's dedication to the broader public, making its rich patent portfolio available for the benefit of the United States' citizens. By fostering partnerships and entering into licensing agreements with various industries, these patents become the bedrock upon which a thriving economy is built, jobs are created, and the overall quality of life is elevated.</p>

  <p class="normal_text">At its core, this program epitomizes the spirit of pioneering research. It bridges the gap between the frontiers of space and the realms of practical application, ensuring that the monumental investments made by NASA in pushing the boundaries of knowledge find resonating echoes in the advancement of our society. These innovations, often birthed in the pursuit of understanding the cosmos, don a new role as catalysts for transformative change in sectors ranging from technology and healthcare to transportation and energy.</p>

  <div class="orange-line"></div>
  <div class="row">
    <div
        v-for="card in cardData"
        :key="card.description"
        class="col-lg-3 col-md-4 col-sm-6 col-12"
        style="margin-bottom: 1rem;"
      >
      <div class="card cart-descr">
        <img :src="card.image" :alt="card.description" style="margin-bottom: 0.5rem;" />
        <p class="normal_text">{{ limit(card.description, 100) }}</p>
        <button class="cart_btn" @click="openModal(card)">More</button>
        <div v-if="card.showModal" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-header">
              <button @click="closeModal(card)" class="cart_btn closed">Close</button>
            </div>
            <div class="modal-body">
              <img :src="card.image" :alt="card.description" class="discr_img" />
              <div class="orange-line"></div>
              <p class="normal_text">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pagination">
    <a href="" @click.prevent="getpage(1)">1</a>
    <a href="" @click.prevent="getpage(2)">2</a>
    <a href="" @click.prevent="getpage(3)">3</a>
    <a href="" @click.prevent="getpage(10)">4</a>
    <a href="" @click.prevent="getpage(5)">5</a>
    <a href="" @click.prevent="getpage(6)">6</a>
    <a href="" @click.prevent="getpage(7)">7</a>
    <a href="" @click.prevent="getpage(8)">8</a>
    <a href="" @click.prevent="getpage(9)">9</a>
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
  font-size: 2rem;
  letter-spacing: 1px;
  color: #ed902e;
}




.my-body {
  margin: 0;
  padding: 0;
  justify-content: center; 
  align-items: center;
  background-size: 100% ;
  background: #1A1C22;
  color: white;

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
  background-image: url('./icons/technologyMain.jpg');
  background-size: 100%;
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
/* carts */
.row{
  margin-top: 2rem;
}
.cart-descr{
  height: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  color: white;
  background-color:#333 ;
  transition-duration: 0.3s;

}
.discr_img{
  border-radius: 1rem;
  width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
  object-fit: cover;
}

.cart_btn{
    position: absolute;
    width: 6rem;
    height: 2rem;
    cursor: pointer;
    color: #fff;
    background: #1A1C22;
    border: 1px solid #333640;
    font-size: 17px;
    border-radius: 0.5rem;

    bottom: 0;
    left: 5%;
    
}
.cart_btn.closed{
  background: #333640;
  margin-bottom: 1rem;
}


.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
}
.modal-content {
  background-color: #292b32;
  padding: 2rem 3rem 4rem 3rem;
  border: 2px solid rgb(147, 147, 147);
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  z-index: 999;
}
.modal-header {
  display: flex;
  justify-content: flex-end;
}
.m-1{
  border-radius: 5rem;
  padding: 0.3rem;
  border-color: transparent;
}

.pagination{
  justify-content: center;

}
.pagination a{
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 5rem;
  text-decoration: none;
  color: white;
  font-size: 20px;

}
.pagination a:hover{
  background-color: #ed902e;
  color: #151515;
}
.spaceman {
  position: absolute;
    left: 80%;
    transform: translateX(70%) translateY(-80%) ;    
    width: 200px;    
    animation: spaceman-move 7s infinite ease-in-out;
    
}
@keyframes spaceman-move {
    from{
        transform: translateX(70%) translateY(-80%);
    }

    50%{
        transform: translateX(0%) translateY(-110%);
    }

    to{
        transform: translateX(70%) translateY(-80%);
      }
    }   
</style>
