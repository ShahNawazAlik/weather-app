// function getweather(){

//     document.querySelector(".forecast-table").style.display = "block";
//     const cityName = document.querySelector("input").value;

// $.ajax({
//         url: `http://http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c5d52f85f8be97de3e8a06411dee6987&units=metric`,
//         success: function (data) {
//             console.log(data);
//             const isNight;
//             if (isNight === true) {
//                 // black background
//                 // color white
//             } else {
//                 // orange background
//                 // color black
//     		 document.querySelector(".location").innerHTML = data.name;
//             document.querySelector(".num").innerHTML = data.main.temp;
//             document.querySelector(".forecast-icon").innerHTML = data.weather[0].main;
//             document.querySelector(".min").innerHTML = data.main.temp_min;
//             document.querySelector(".max").innerHTML = data.main.temp_max;
//     },
//         error: function (err) {
//             console.log(err);
//         }
//     });

// }