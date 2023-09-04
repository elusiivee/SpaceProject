<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />



 -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';

import FooterVue from './components/footer.vue';
import backToTop from './components/BackToTopbtn.vue';
import RegComp from './components/RegistrationComponent.vue';

 </script>
 
 <template>

  
  <RouterView />
  <backToTop />
  <FooterVue />
 </template>
 
 <style>

 </style>


