const button=document.getElementById("input-button")
const input=document.getElementById("input")
async function api(value) {
    const result=await fetch(`http://api.weatherapi.com/v1/current.json?key=d1a6789f0a5f45d79e425753250904&q=${value}&aqi=no`);
    return await result.json()
    
}
button.addEventListener("click",async()=>{
    const city=input.value
    const result= await api(city)
    const place=result.location.name
    const input1=document.getElementById("city1")
    input1.innerText="City: "+place
    const state=document.getElementById("region")
    state.innerText="State: "+result.location.region
    const stattimee=document.getElementById("time")
    stattimee.innerText="Time: "+result.current.last_updated
    const stattemp=document.getElementById("temp")
    stattemp.innerText="Temperature: "+result.current.temp_c
})
