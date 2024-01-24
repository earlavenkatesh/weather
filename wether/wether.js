var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "2f34cef9780c665b818fc93beb843484";

function convertion(val) {
    return (val - 273).toFixed(2);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descript = data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(tempature)}C</span>`;
            descrip.innerHTML = `Sky conditions: <span>${descript}</span>`;
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
          
        })
        .catch(err => {
            alert('You entered a wrong city name or there was an issue fetching the data.');
            console.error(err);
        });
});