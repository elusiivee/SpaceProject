<!-- not used -->



<template>
    <div>
      <input type="text" id="apiKeyInput" placeholder="Your API Key" class="form-control" v-model="apikey">
      <button @click="savekey">Submit</button>
      <button @click="toHomePage">save</button>
    </div>
  </template>
  
<script>
  export default {

    data() {
      return {
        tempMessage: ""
      };
    },
    methods: {
      submit: function() {
        this.$emit("inputData", this.tempMessage);
        this.tempMessage = "";
      }
    }
  };
  </script>