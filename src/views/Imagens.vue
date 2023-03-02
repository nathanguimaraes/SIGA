<template>
  <section class="container">
    <div class="title-photos">
    <p>Tire suas Fotografias</p>
  </div>
    <video ref="video" :srcObject="videoStream" autoplay class="display-video"></video>
    <button @click="captureImage" class="capture-img">Tirar Foto</button>
    <div class="preview-img">
      <a v-if="imageData" :href="imageData" download="foto.png" class="link-img"> 
      Fazer download
   </a>
    <canvas ref="canvas" class="pre-img"></canvas>
  </div>
</section>
</template>


<script>
export default {
  data() {
    return {
      video: null,
      videoStream: null,
      canvas: null,
      context: null,
      imageData: null,
    };
  },
  mounted() {
    this.video = this.$refs.video;
    this.canvas = this.$refs.canvas;
    this.context = this.canvas.getContext("2d");
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.videoStream = stream;
        this.video.srcObject = stream;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    captureImage() {
      this.canvas.height = this.video.videoHeight;
      this.canvas.width = this.video.videoWidth;
      this.context.drawImage(this.video, 0, 0);
      this.imageData = this.canvas.toDataURL();
    },
  },
};
</script>

<style>
    .container {
      position: relative;
      max-width: 95%;
      width: 75%;
      background:var(--box-color);
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      margin: 2.5% auto auto auto;
    }

img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
.capture-img{
  background-color: #ffbb00;
height: 35px;
width: 50%;
font-size: 20px;
margin-left: 26%;
border: none;
cursor: pointer;
transition: all 0.2s ease;
border-radius: 10px;
margin-top: 2%;
    }
.title-photos p{
  margin-top: 5%;
  margin-left: 40%;
          font-size: 30px;
}


.display-video{
  width: 100%;
  height: 400px;
}
.preview-img{
  margin-top: 10%;
  margin-left: 0%;
  width: 100%;
  height: 400px;

}
.pre-img{
  width: 80%;
  height: 400px;

  margin-top: 1%;
  margin-left: 10%;

}
.link-img{
  background-color: #193db4;
  color: azure;
height: 50px;
width: 70%;
font-size: 15px;
margin-left: 0%;
cursor: pointer;
transition: all 0.2s ease;
border-radius: 4px;
margin-top: 10%;
margin-left: 10%;
text-decoration: none;
}

</style>

