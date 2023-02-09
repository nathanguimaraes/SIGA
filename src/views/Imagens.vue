<template>
<div class="form">
  <div id="holder">
    <span class="center"><b>Drag Image Here</b></span>
  </div> 
  <span id="status">File API & FileReader API not supported</span>
  <div class="buttons-img">
    <label for="image_uploads">Choose a image to upload to server (PNG, JPG)</label>
    <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png">
    <button class="submit" type="submit">Submit</button>
  </div>
  <p>Please DO NOT upload image that size is over 960 px</p>
  <div class="effect-mode">
    <hr>
    <table>
      <tr><th><h3>Mode</h3></th></tr>
      <tr><td><button class="crop"></button></td><td><button class="brush"></button></td><td><button class="filter">f</button></td></tr>
    </table>
  </div>
  <div class="effect-brush">
    <table class="effect-brush-color">
      <tr><th><h4>Color</h4></th></tr>
      <tr>
        <td><button class="black"></button></td>
        <td><button class="blue"></button></td>
        <td><button class="deep-blue"></button></td>
        <td><button class="green"></button></td>
        <td><button class="light-green"></button></td>
        <td><button class="yellow"></button></td>
        <td><button class="orange"></button></td>
        <td><button class="pink"></button></td>
        <td><button class="purple"></button></td>
      </tr>
    </table>
    <table class=" effect-brush-size">
      <tr><th><h4>Size</h4></th></tr>
      <tr>
        <td><button class="large"></button></td>
        <td><button class="medium"></button></td>
        <td><button class="small"></button></td>
      </tr>
    </table>
  </div>
  <div class="effect-filter">
    <hr>
    <div class="effect-filter-card">
      <img class="effect-filter-img origin" style="width:100%">
      <!-- origin -->
      <h3 class="card-container">Origin</h3>
    </div>
    <div class="effect-filter-card">
      <img class="effect-filter-img bright" style="width:100%">
      <!-- higher saturate higher brightness -->
      <h3 class="card-container">Bright</h3>
    </div>
    <div class="effect-filter-card">
      <img class="effect-filter-img contrast" style="width:100%">
      <!-- higher contrast -->
      <h3 class="card-container">Contrast</h3>
      </div>
    <div class="effect-filter-card">
      <img class="effect-filter-img classical" style="width:100%">
      <!-- lower brightness lower saturate -->
      <h3 class="card-container">Classical</h3>
    </div>
    <div class="effect-filter-card">
      <img class="effect-filter-img gray-scale" style="width:100%">
      <h3 class="card-container">Gray Scale</h3>
    </div>
  </div>
  <div class="preview">
    <hr>
    <canvas width="960" height="960" id="canvas"></canvas>
    <svg class="brush" width="960" height="960"></svg>
  </div>
</div>

<!-- partial -->


<!-- partial -->
  

  </template>

<style scoped>
hr {
    display: block;
    unicode-bidi: isolate;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
}

button {
  cursor: pointer;
  outline: none;
}

.active {
  display: block;
}

.form {
  width: 960px;
  background: #f7f7f7;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

img {
  width: 100%;
  height: auto;
}

.form p {
  line-height: 32px;
  padding-left: 10px;
}

.form label {
  background-color: #337ab7;
  padding: 5px 10px;
  border-radius: 4px;
  border: 2px solid #2e6da4;
  font-size: 0.8rem;
  height: auto;
}
.form label:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}

.form button.submit {
  color: #000;
  background-color: #5cb85c;
  padding: 5px 10px;
  border-radius: 4px;
  border: 2px solid #4cae4c;
  font-size: 0.8rem;
  height: auto;
}
.form button.submit:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}

.buttons {
  text-align: right;
}

.form label:active, form button.submit:active {
  outline: none;
}

#holder {
  position: relative;
  border: 10px dashed #ccc;
  width: 300px;
  height: 300px;
  margin: 20px auto;
}

#holder.hover {
  border: 10px dashed #777;
}

.center {
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #ccc;  
}

.effect-mode button {
  margin: 0 16px;
}

.effect-mode button.crop {
  padding: 14px;
  border: 2px dashed #111;
}
.effect-mode button.brush {
  padding: 14px;
  border: 2px solid #111;
  border-radius: 50%;
  background-color: #000;
}
.effect-mode button.filter {
  font-size: 22px;
  padding: 2px 12px;
  border: 2px solid #111;
}

.effect-mode, .effect-brush, .effect-filter {
  display: none;
}

.effect-brush-color button {
  padding: 14px;
  border: 2px solid;
  border-radius: 50%;
  margin: 0 16px;
}
.effect-brush-color button.black {
  border-color: rgba(0, 0, 0, 0.87);
  background-color: #000;
}
.effect-brush-color button.blue {
  border-color: rgba(120, 197, 214, 0.87);
  background-color: #78c5d6;
}
.effect-brush-color button.deep-blue {
  border-color: rgba(69, 155, 168, 0.87);
  background-color: #459ba8;
}
.effect-brush-color button.green {
  border-color: rgba(121, 194, 103, 0.87);
  background-color: #79c267;
}
.effect-brush button.light-green {
  border-color: rgba(197, 214, 71, 0.87);
  background-color: #c5d647;
}
.effect-brush-color button.yellow {
  border-color: rgba(245, 214, 61, 0.87);
  background-color: #f5d63d;
}
.effect-brush-color button.orange {
  border-color: rgba(242, 140, 51, 0.87);
  background-color: #f28c33;
}
.effect-brush-color button.pink {
  border-color: rgba(232, 104, 162, 0.87);
  background-color: #e868a2;
}
.effect-brush-color button.purple {
  border-color: rgba(191, 98, 166, 0.87);
  background-color: #bf62a6;
}

.effect-brush-size button {
  border: 2px solid #111;
  border-radius: 50%;
  background-color: #000;
  margin: 0 16px;
}
.effect-brush-size button.large {
  padding: 12px;
}
.effect-brush-size button.medium {
  padding: 8px;
}
.effect-brush-size button.small {
  padding: 4px;
}

.effect-filter-card {
  display: inline-block;
  width: 19.66%;
}

.effect-filter-img {
  cursor: pointer;
}

.card-container {
  text-align: center
}

.effect-filter-img.bright {
  filter: saturate(1.2) brightness(1.2);
}
.effect-filter-img.contrast {
  filter: contrast(1.5);
}
.effect-filter-img.classical {
  filter: saturate(.8) brightness(.8);
}
.effect-filter-img.gray-scale {
  filter: grayscale(1);
}

.preview {
  width: 960px;
  height: 960px;
}

canvas, svg {
  position: absolute;
}

.show {
  display: block;
}

.hide {
  display: none;
}

</style>