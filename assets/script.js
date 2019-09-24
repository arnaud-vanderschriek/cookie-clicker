//variable utilisée
(() => {
  var counterClick = 0; //renmagasine les valeurs counters des autres évents
  var counterCandyCane; //nbr de bonus candyCane
  var counterMultiply; //nbr de bonus multiply

  var price;
  var priceEmilie;
  var priceCandyCane;

  //code Here

  /*functions Liste*/

  //One Click, one by one and update the counter
  document.getElementById("cookie").addEventListener("click", () => {
    counterClick = counterClick + 1;
    //console.log(counterClick);
  });

  //Function Candycane/autoclick

  //Function Multiplier

  //Function Disable
  function disable() {
    if (counterClick < price) {
      document.getElementById("emilie").disable = true;
      document.getElementById("candycane").disable = true;
    } else {
      document.getElementById("emilie").disable = false;
      document.getElementById("candycane").disable = false;
    }
  }
  setInterval(disable, 500);

  //Function PetitDej

  //mettre a jour le counter ( avec setInterval ? )
  function updateCounter() {
    document.getElementById("counter").innerText = counterClick;
  }
  setInterval(updateCounter, 500);
})();
