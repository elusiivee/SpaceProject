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
</script>

<template>
    <nav class="main-nav">
        <div class="nav-bg"><div class="orange-line"></div></div>
        <ul>
        <RouterLink to="/"><li><a href="">Home</a></li></RouterLink>
        
        <RouterLink to="/about"><li><a href="">about</a></li></RouterLink>
        </ul>
    
  </nav>
</template>


<style>

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
  color:#ed902e;
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


</style>