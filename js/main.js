var century,year,month,day

function receiveInput(){
    var day =  parseInt(document.getElementById("day").Value );
    var month = parseInt(document.getElementById("month").Value);
    var year = parseInt(document.getElementById("year").Value);
    var century = parseInt(document.getElementById("century").Value);
    var gender = parseInt(document.getElementById("gender").Value);
}

var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

 dayOfTheWeek = (((century/4)-2*century-1)+((5*year/4))+((25*(month+1)/10))+day)%7




 
