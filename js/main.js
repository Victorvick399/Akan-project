

function receiveInput(){
    var day =  parseInt(document.getElementById("day").value) ;
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var century = parseInt(document.getElementById("century").value);
    var gender = parseInt(document.getElementById("gender").value);
    
    var dayOfTheWeek = Math.floor((((century/4)-2*century-1)+((5*year/4))+((25*(month+1)/10))+day) % 7 );

    var nameOfTheDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


 
    switch(dayOfTheWeek){
        case 0:
        if(gender="male"){
            alert(maleNames[0])
        }else{
            alert(femaleNames[0])
        }
        break;
        case 1:
        if(gender="male"){
            alert(maleNames[1])
        }else{
            alert(femaleNames[1])
        }
        break;
        case 2:
        if(gender="male"){
            alert(maleNames[2])
        }else{
            alert(femaleNames[2])
        }
        break;
        case 3:
        if(gender="male"){
            alert(maleNames[3])
        }else{
            alert(femaleNames[3])
        }
        break;
        case 4:
        if(gender="male"){
            alert(maleNames[4])
        }else{
            alert(femaleNames[4])
        }
        break;
        case 5:
        if(gender="male"){
            alert(maleNames[5])
        }else{
            alert(femaleNames[5])
        }
        break;
        case 6:
        if(gender="male"){
            alert(maleNames[6])
        }else{
            alert(femaleNames[6])
        }

    }
   
}


 