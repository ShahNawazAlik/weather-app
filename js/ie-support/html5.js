let degree = "&#176;"
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function initialize(){
	document.querySelector(".forecast-table").style=`display:block;`
	let city = document.querySelector(".inp1").value;
	
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&APPID=c5d52f85f8be97de3e8a06411dee6987&units=metric",
		success: function(data){
		console.log(data);

		let temp = Math.round(data.main.temp);
		document.querySelector(".city-name").innerHTML = city ;
		document.querySelector(".city-name").style = ` text-transform: uppercase;	` ;

		document.getElementById("temp").innerHTML = temp + degree;
		document.getElementById("wheather").innerHTML = data.weather[0].description;
		document.getElementById("wind").innerHTML = data.wind.speed;
		},
		error: function(error){
			alert(error.responseJSON.message);
		}
	
	})


$.ajax({
	url: "https://api.openweathermap.org/data/2.5/forecast?q=" +city+ "&APPID=c5d52f85f8be97de3e8a06411dee6987&units=metric",
	success: function(data){
	console.log(data);
	let d1 = new Date(data.list[0].dt*1000);
	let d2 = new Date(data.list[8].dt*1000);
	let d3 = new Date(data.list[16].dt*1000);
	let d4 = new Date(data.list[24].dt*1000);
	let d5 = new Date(data.list[32].dt*1000);

		// document.querySelector(".day").innerHTML = city + "<sup>"+"<i class='fas fa-cloud'>"+"</i>"+"</sup>";
		document.querySelector(".day-mon").innerHTML = days[d1.getDay()];
		document.querySelector(".day-tues").innerHTML = days[d2.getDay()];
		document.querySelector(".day-wed").innerHTML = days[d3.getDay()];
		document.querySelector(".day-thus").innerHTML = days[d4.getDay()];
		document.querySelector(".day-fri").innerHTML = days[d5.getDay()];

		document.querySelector(".pre-temp-mon").innerHTML = Math.round(data.list[0].main.temp) + degree + "/" + Math.round(data.list[2].main.temp) + degree ;
		document.querySelector(".pre-temp-tues").innerHTML = Math.round(data.list[5].main.temp) + degree + "/" + Math.round(data.list[6].main.temp) + degree ;
		document.querySelector(".pre-temp-wed").innerHTML = Math.round(data.list[13].main.temp) + degree + "/" + Math.round(data.list[14].main.temp) + degree ;
		document.querySelector(".pre-temp-thus").innerHTML = Math.round(data.list[21].main.temp) + degree + "/" + Math.round(data.list[22].main.temp) + degree ;
		document.querySelector(".pre-temp-fri").innerHTML = Math.round(data.list[29].main.temp) + degree + "/" + Math.round(data.list[32].main.temp) + degree ;
		


		
		document.querySelector(".pre-cloud-mon").innerHTML = data.list[0].weather[0].description;
		document.querySelector(".pre-cloud-tue").innerHTML = data.list[8].weather[0].description;
		document.querySelector(".pre-cloud-wed").innerHTML = data.list[16].weather[0].description;
		document.querySelector(".pre-cloud-thus").innerHTML = data.list[24].weather[0].description;
		document.querySelector(".pre-cloud-fri").innerHTML = data.list[32].weather[0].description;
		
		},
	error: function(error){
		alert(error.responseJSON.message);
	}

})
}








































































// /**
// * @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
// */
// !function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.2",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document);




// function getweather(){

//     document.querySelector(".forecast-table").style.display = "block";
//     const cityName = document.querySelector("input").value;

// $.ajax({
//         url: `http://http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c5d52f85f8be97de3e8a06411dee6987&units=metric`,
//         success: function (data) {
//             console.log(data);
//           //  const isNight;
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
//     }},	
//         error: function (err) {
//             console.log(err);
//         }
//     });

// }