     const inpt=document.getElementById("inp");
     const btn=document.getElementById("search-btn");
     const API_KEY="f5d9f9bd6596e4718945a0a3cacc30c8";
     btn.addEventListener("click",()=>{
     if(inpt.value==""){
        alert("pehla naam daal bhai");
     }
     else{
      getweatherData();
     }
     })
     async function getweatherData(){
     try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inpt.value}&appid=${API_KEY}&units=metric`
    );
     let data=await response.json();
     
     if (data.cod === "404") {
  document.getElementById("result").innerHTML = `
    <p style="color:red;">sorry bhai nhi mili teri vali alag duniyaaaaaa.</p>
  `;
  return;
}
 /*displaying the weather parameters*/
     document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity:${data.main.humidity}%</p>
    `;
     }
    catch (error) {
        console.log("Error fetching weather:", error);
    }
    console.log(inpt.value);
    }

