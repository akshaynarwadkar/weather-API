

const searchEl=document.getElementById('search-box')
const btn=document.getElementById('search-btn')
const displayBoxEl=document.getElementById('display-box')


const tempEl=document.getElementById('temp')
const cloudEl=document.getElementById('cloud')
const feelsEl=document.getElementById('feels')
const humidityEl=document.getElementById('humidity')


const url='https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='
let city=''


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b3cf03e90mshbce0ce96e9b94cfp10b668jsnd078fac425ef',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




    btn.onclick=()=>{
        city=searchEl.value;
        fetch(` ${url}${city} `, options)
        .then(response => response.json())
        .then(data=> {
            
            if(city==""){
                displayBoxEl.innerHTML=''
                displayBoxEl.innerHTML='<p style="color:red;">Please enter a valid city name</p>'
            }else{
                displayBoxEl.innerHTML=''
                displayBoxEl.innerHTML=`<p> <b>Temp</b> : ${data.temp}°  </p>
                
                <p><b>Feels-like </b> : ${data.feels_like}° </p>
                <p><b>Cloud Pct </b>: ${data.cloud_pct}% </p>
                <p><b>Humidty </b>: ${data.humidity}gm3 </p>`
            }
            
            

            
        }
        )
        .catch(err => console.error(err));
}