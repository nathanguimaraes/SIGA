<template>
  <input type="file" accept="image/*" @change="onChange" />
  <div id="preview">
    <img v-if="item.imageUrl" :src="item.imageUrl" />
  </div>
</template>


<script>
export default {
  name: 'imageUpload',
  data() {
    return {
      item:{
          //...
          image : null,
          imageUrl: null
      }
    }
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0]
      this.image = file
      this.item.imageUrl = URL.createObjectURL(file)
    }
  }
} 
</script>

