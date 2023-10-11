const apikey = "dac924bd21005c4e4adfa1622c829ad0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const inputItem = document.querySelector('.search input');

document.querySelector('.search button').addEventListener('click',()=>{
  checkWeather(inputItem.value)
})



async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);


  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
  document.querySelector('.humudity').innerHTML = Math.round(data.main.humidity) +'%';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

}