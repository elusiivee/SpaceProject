
<script setup>
import { RouterLink, RouterView } from 'vue-router';

import FooterVue from './components/footer.vue';
import backToTop from './components/BackToTopbtn.vue';
// import RegComp from './components/RegistrationComponent.vue';
import NavBar from "./components/NavComponent.vue"
 </script>
 
 <template>


    <RouterView />
    <NavBar  />
    <backToTop />
    <FooterVue />

 </template>
 
 <style>

 </style>


