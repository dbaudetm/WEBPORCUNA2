const e=document.querySelector("#temp"),n=document.querySelector("#main");!function(){const a=new XMLHttpRequest;a.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Porcuna&appid=ded8fb24404261afff13e88870c2cf84&lang=sp"),a.send(),a.onload=()=>{if(404===a.status)e.innerHTML="Api no disponible.";else{var o=JSON.parse(a.response);console.log(o),"Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."===o.message?(e.innerHTML="Se hs superado las llamadas a la api ",n.innerHTML="En un tiempo volvera a estar disponible"):(e.innerHTML=`${Math.round(o.main.temp-273.15)}°C`,n.innerHTML=o.weather[0].description)}}}();
//# sourceMappingURL=index.0f9afc07.js.map
