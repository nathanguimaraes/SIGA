import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




 createApp(App).use(router).mount('#app')



//SIDEBAR
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});


 ////










 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var vhora = today.getHours();
var vminuto = today.getMinutes();
var vsegundo = today.getSeconds();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

if (vsegundo < 10) {
  vsegundo = '0' + vsegundo;
}

today = yyyy + '-' + mm + '-' + dd;
datafoto = 'Data foto: ' + dd + '/' + mm + '/' + yyyy + '   ' + vhora + ':' + vminuto + ':' + vsegundo;


$(document).ready(function() {
  $("#datainiplant").attr("max", today);
  $("#datafinplant").attr("max", today);
  $("#datavist").attr("max", today);
});









