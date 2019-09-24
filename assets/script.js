//variable utilisée

var counterClick; //renmagasine les valeurs counters des autres évents
var counterCandyCane; //nbr de bonus candyCane
var counterMultiply; //nbr de bonus multiply

var price;
var priceEmilie;
var priceCandyCane;

//code Here

/*functions Liste*/

//Function Click

function click() {
  document.getElementById("counter").addEventListener("click", () => {
    counterClick = counterClick + 1;
    console.log("click");
    console.log("counterClick");
  });
}

//Function Candycane/autoclick

//Function Multiplier

//Function Disable
function disable() {
  if (couterClick < price) {
    document.getElementById("?").disable = true;
  } else {
    document.getElementById("?").disable = false;
  }
}
setInterval(disable, 500);

//Function PetitDej

//mettre a jour le counter ( avec setInterval ? )
function updateCounter() {
  document.getElementById("counter").innerText = counterClick;
}
setInterval(updateCounter, 500);
