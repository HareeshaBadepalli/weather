 // http://api.weatherapi.com/v1/current.json?key=6f8d0e8769424785bce73952240112&q=Mumbai&aqi=no

const temperatureField=document.querySelector(".temp");
const locationField=document.querySelector(".location p");
const dateandTimeField=document.querySelector(".date_time");
const conditionField =document.querySelector(".condition ");
const SearchField=document.querySelector(".search_area");
const form=document.querySelector('form')


form.addEventListener('submit',searchForLocation)

 let target='Lucknow'
 const fetchResults = async (targetLocation) =>{

    let url = `http://api.weatherapi.com/v1/current.json?key=6f8d0e8769424785bce73952240112&q=${targetLocation}&aqi=no`;

    const res=await fetch(url)
    
    const data=await res.json()

    console.log(data)

    let locationName=data.location.name

    let time=data.location.localtime

    let temp=data.current.temp_c

    let condition=data.current.condition.text


    updateDetails(temp , locationName , time,condition)

 }
    function updateDetails(temp , locationName ,time , condition){
      let splitDate=time.split(" ")[0];
   
      let splitTime = time.split(" ")[1];

      let currentDay = getDayName(new Date(splitDate).getDay());


      temperatureField.innerText=temp
      locationField.innerText=locationName
      dateandTimeField.innerHTML=`${splitDate} ${currentDay} ${splitTime}`;
      conditionField.innerHTML=condition
    }



   //if user click on submit then control comes here
   function searchForLocation(e){
      e.preventDefault()

      target=SearchField.value

      fetchResults(target)
   } 


 fetchResults(target)

 function getDayName(number){
   switch(number){
      case 0:
         return 'sunday'
      case 1:
         return 'Monday'
      case 2:
         return 'Tuesday'
      case 3:
         return 'Wednesday'
      case 4:
         return 'Thursday'      
      case 5:
         return 'Friday'
      case 6:
         return 'Saturday'
   }
 }