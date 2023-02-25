<template>
  <div id="app">
    <form @submit.prevent="handleSubmit">
      <div>
        <input id="camera" capture="camera" type="file"  multiple @change="handleFileUpload">
      </div>
      <div v-for="(image, index) in images" :key="index">
        <img :src="image.url" width="100">
        <p>{{ image.description }}</p>
        <p>Latitude: {{ image.location.latitude }}</p>
        <p>Longitude: {{ image.location.longitude }}</p>
        <p>Data e hora atuais: {{ currentDateTime }}</p>
      </div>
      <div>
        <label for="description">Descrição da imagem:</label>
        <input type="text" id="description" v-model="description">
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
</template>


<script>
   export default{
      data() {
        return {
          images: [],
          description: '',
          latitude: '',
          longitude: '',
          currentDateTime: '',
          latitude: '',
          longitude: '',
        };
      },
      mounted() {
    this.getCurrentDateTime();
    this.getGeoLocation();
     },
      methods: {

        getCurrentDateTime() {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.currentDateTime = date+' '+time;
    },
    getGeoLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude.toFixed(4);
          this.longitude = position.coords.longitude.toFixed(4);
        }, error => {
          console.error(error);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
        handleFileUpload(event) {
          const files = event.target.files;
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
              this.images.push({
                url: reader.result,
                description: this.description,
                location: {
                  latitude: this.latitude,
                  longitude: this.longitude,
                  currentDateTime: this.currentDateTime
                },
              });
            };
            reader.readAsDataURL(file);
          }
        },
        handleSubmit() {
          // aqui você pode enviar os dados para o servidor ou fazer outra ação
          // como limpar o formulário
          this.description = '';
          this.latitude = '';
          this.longitude = '';
        },
      },
    } 

</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="file"] {
  margin-bottom: 1rem;
}

img {
  margin: 1rem;
}
</style>



