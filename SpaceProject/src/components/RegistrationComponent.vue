
<!-- not used -->
<!-- проблема в ключах що у них є ліміт. Хотів щоб юзер вводив свій ключ але перепробував багато способів і всі не працюють... -->
<template>
  <div>
    <p></p>
    <input v-model="apiKey" placeholder="Enter API Key" />
    <button @click="sandtoparent">Submit</button>
  </div>
</template>

<script>

export default {
  props:['fromChild'],
  data() {
    return {
      apiKey: '',
    };
  },
  methods: {
    sandtoparent() {
      this.$emit('api-key', this.apiKey);
      this.$router.push({
        name: 'home',
      });
    },
    
  },
};
</script>