//variable utilisée
(() => {
  let counterClick; //renmagasine les valeurs counters des autres évents
  let multiplicatorCandycane=0; //nbr de bonus candyCane
  var counterMultiply; //nbr de bonus multiply

  var price;
  var priceEmilie;
  let priceCandycane = 0;
  let multiplicatorCandycane;

  //code Here

  /*functions Liste*/

function addCount() {
    counterClick=+(1*multiplicatorCandycane);
    });

document.getElementById("cookie").addEventListener("click",() => {
        counterClick=counterClick+1;
        console.log(counterClick);
        document.getElementById("counter").innerText = counterClick;

    });

  //Function Candycane/autoclick
document.getElementById("candycane").addEventListener("click", () => {
    multiplicatorCandycane=+1;
    priceCandycane = priceCandycane + 15;
    counterClick = counterClick - priceCandycane;
    console.log(priceCandycane);
    document.getElementById("candycane").innerText = ("Add another Candy Cane for "+priceCandycane);
    });
  //Function Multiplier

  //Function Disable
  function disable() {
    if (counterClick < price) {
      document.getElementById("emilie").disabled = true;
      document.getElementById("candycane").disabled = true;
    } else {
      document.getElementById("emilie").disabled = false;
      document.getElementById("candycane").disabled = false;
    }
  }

  //Function PetitDej

  //mettre a jour le counter ( avec setInterval ? )

})();
