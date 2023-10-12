const apikey = "dac924bd21005c4e4adfa1622c829ad0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const inputItem = document.querySelector('.search input');

document.querySelector('.search button').addEventListener('click',()=>{
  checkWeather(inputItem.value)
})

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  const weatherIcon = document.querySelector('.weather-icon');
  if(response.status == "404"){
    document.querySelector('.status').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
    document.querySelector('.status').innerHTML = 'Invalid City Name';
    
  }else{
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humudity').innerHTML = Math.round(data.main.humidity) +'%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.status').style.display = 'none';
  }

    if(data.weather[0].main == 'Rain'){
      document.querySelector('.status').style.display = 'block';
      document.querySelector('.status').innerHTML = 'Rainy';
      weatherIcon.src = '/images/rain.png'
    }else if (data.weather[0].main == 'Clouds'){
      document.querySelector('.status').style.display = 'block'
      document.querySelector('.status').innerHTML = 'Cloudy';;
      weatherIcon.src = '/images/clouds.png'
    }else if (data.weather[0].main == 'Clear'){
      document.querySelector('.status').style.display = 'block';
      document.querySelector('.status').innerHTML = 'Clear Sky';
      weatherIcon.src = '/images/clear.png'
    }else if(data.weather[0].main == 'Drizzle'){
      document.querySelector('.status').style.display = 'block';
      document.querySelector('.status').innerHTML = 'Drizzling';
      weatherIcon.src = '/images/drizzle.png'
    }else if (data.weather[0].main == 'Mist'){
      document.querySelector('.status').style.display = 'block';
      document.querySelector('.status').innerHTML = 'Foggy';
      weatherIcon.src = '/images/mist.png'
    }else if (data.weather[0].main == 'Snow'){
      document.querySelector('.status').style.display = 'block';
      document.querySelector('.status').innerHTML = 'Snowing';
      weatherIcon.src = '/images/snow.png'
    }


  
  console.log(data);





}