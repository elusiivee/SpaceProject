<template>
    <div>
      <input type="text" id="apiKeyInput" placeholder="Your API Key" class="form-control" v-model="apiKey">
      <button @click="submitApiKey">Submit</button>
      <button @click="toHomePage">save</button>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        apiKey: '',
      };
    },
    methods: {
      savekey(){
        localStorage.setItem('apiKey', this.apiKey);
        console.log(this.apiKey)
      },
      toHomePage() {
      this.$router.push('/');
    }
  }
};
</script>