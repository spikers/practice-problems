window.onload = function() {
  
  document.body.addEventListener('keypress', function() {
    event.key == "Enter" ? flowHandler() : false;
  });
}




function flowHandler() {
  var base = parseInt(getBase());
  !isNaN(base) ? base = base : base = 1;
  document.getElementsByTagName("p")[0].innerHTML = "";
  spiral(base);
  document.querySelector("#base").focus();
}

function getBase() {
  return document.querySelector("#base").value;
}


function spiral(start) {
var times = 10;

var firstNumber = 0,
    secondNumber = 0;

recursiveFunction(start);

  function recursiveFunction(start) {
    secondNumber = firstNumber + secondNumber;
    firstNumber = start;
    document.getElementsByTagName("p")[0].innerHTML += secondNumber + "<br>";
                        
    //So I don't run into an infinite loop
    if (times > 0) {
      times--;
      recursiveFunction(secondNumber);
    }
    return; 
  }
}