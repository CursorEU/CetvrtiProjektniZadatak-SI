const apiKey = 'dec639d494b26e2d863c9e80aa1f5b63';

const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperatureid');
const weatherDescription = document.getElementById('weather-description');
const weatherIcon = document.getElementById('weather-icon');
const visibilityData = document.getElementById('visibility-data');

async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hr&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  cityName.textContent = data.name;

  temperature.textContent = `${data.main.temp.toFixed()} °C`;
  weatherDescription.textContent = data.weather[0].description;
  visibilityData.textContent = `${data.visibility} m`;

  const bgc = document.getElementById("bodi");
  const dug = document.getElementsByClassName("temperature")[0];
  var r=data.main.temp.toFixed();

  if(r<-17)
    {dug.style.backgroundColor= "indigo";}
  else if(r>=-17 && r<-8)
    {dug.style.backgroundColor= "midnightblue";}
  else if(r>=-8 && r<-4)
    {dug.style.backgroundColor= "blue";}
  else if(r>=-4 && r<-1)
    {dug.style.backgroundColor= "royalblue"; }
  else if(r>=-1 && r<4)
    {dug.style.backgroundColor= "cornflowerblue"; }
  else if(r>=4 && r<8)
    {dug.style.backgroundColor= "cadetblue"; }
  else if(r>=8 && r<11)
    {dug.style.backgroundColor= "yellowgreen"; }
  else if(r>=11 && r<15)
    {dug.style.backgroundColor= "limegreen"; }
  else if(r>=15 && r<19)
    {dug.style.backgroundColor= "gold"; }
  else if(r>=19 && r<22)
    {dug.style.backgroundColor= "coral"; }
  else if(r>=22 && r<26)
    {dug.style.backgroundColor= "orange"; }
  else if(r>=26 && r<29)
    {dug.style.backgroundColor= "orangered"; }
  else if(r>=29 && r<35)
    {dug.style.backgroundColor= "red"; }
  else if (r>35)
    {dug.style.backgroundColor= "crimson"; }
  
  switch(weatherDescription.innerText)
  {
    case "vedro": bgc.style.backgroundImage= "url('img/vedro.jpg')" ; break;
    case "blaga naoblaka": bgc.style.backgroundImage= "url('img/blaga.jpg')" ; break;
    case "oblačno": bgc.style.backgroundImage= "url('img/oblacno.jpg')" ; break;
    case "isprekidani oblaci": bgc.style.backgroundImage= "url('img/isprekidani.jpg')" ; break;
    case "raštrkani oblaci": bgc.style.backgroundImage= "url('img/rastrkani.jpg')" ; break;
    case "slaba kiša": bgc.style.backgroundImage= "url('img/slabakisa.jpg')" ; break;
    case "slabi snijeg": case "snijeg": bgc.style.backgroundImage= "url('img/snijeg.jpg')" ; break;
    case "kiša": bgc.style.backgroundImage= "url('img/kisa.jpg')" ; break;
    case "magla": case "sumaglica": case "izmaglica": bgc.style.backgroundImage= "url('img/magla.jpg')" ; break;
    case "pijesak": bgc.style.backgroundImage= "url('img/pijesak.jpg')" ; break;
    case "dim": bgc.style.backgroundImage= "url('img/smog.jpg')" ; break;
  }
}

const form = document.getElementById('weather-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const input = document.getElementById('city-input');
  const city = input.value;

  fetchWeatherData(city);
  input.value = '';
});