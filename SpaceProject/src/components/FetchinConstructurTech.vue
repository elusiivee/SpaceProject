<script>


export default {
methods: {
    data() {
    return {
      cardData: [],
    };
  },
    getpage(pageid){
        fetch(`https://api.nasa.gov/techtransfer/patent/page=${getpage()}/?engine&api_key=eJMyDTpOHHfmxGjf8yuuWMnfDxZIMuI3pk56Nh8U`)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
        })
        .then(data => {
        const importantData = data.results;
        console.log(importantData)
        this.getValue(importantData);
        })
        .catch(error => {
        console.error("Fetch error:", error);
        })
    },
    getValue(data) {
      for (let i = 0; i < 40; i++) {
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
}}
</script>
