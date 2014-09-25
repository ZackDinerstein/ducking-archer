function buttonClick(lightOn){
  
  var greenLight =document.getElementById('green'); 
  var yellowLight = document.getElementById('yellow'); 
  var redLight = document.getElementById('red');
  
  greenLight.style.backgroundColor = "black"; 
  yellowLight.style.backgroundColor = "black";
  redLight.style.backgroundColor = "black";
  
  var light = document.getElementById(lightOn);
  light.style.backgroundColor = lightOn;  
}

 