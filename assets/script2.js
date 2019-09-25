(() => {
  let counterClick = 0;
  let multiplicatorCandycane = 0;
  let priceCandycane = 15;
  let priceemily = 15;
  let emilyModifier = 1;
  let petitDej = false;
  const cookie = document.getElementById("cookie");
  const counter = document.getElementById("counter");
  const imageCuisto = document.getElementById("cuisto");

  //add click to counter
  cookie.addEventListener("click", () => {
    if (petitDej == true) {
      counterClick = counterClick + 1 * 3;
    }
    if (emilyModifier > 1) {
      counterClick = counterClick + 1 * emilyModifier;
    } else {
      counterClick = counterClick + 1;
    }
    disableemily();
    disableCandycane();
    document.getElementById("counter").innerText = counterClick;
  });
  //Candycane modifier
  //=================
  document.getElementById("candycane").addEventListener("click", () => {
    multiplicatorCandycane += 1;

    //remove price from counter
    counterClick = counterClick - priceCandycane;
    counter.innerText = counterClick;
    disableCandycane();
    //update the price
    priceCandycane = priceCandycane + 15;
    document.getElementById("candycane").innerText =
      "Add another Candy Cane for " + priceCandycane;
    // images in the right place
    const candyImage = document.createElement("img");
    candyImage.setAttribute("src", "assets/img/candycane.png");
    candyImage.setAttribute("class", "img-fluid");
    candyImage.setAttribute("width", "100px");
    const target = document.getElementById("emily-container");
    target.appendChild(candyImage);

    //create autoclicker
    let interval = 5000;
    let run = setInterval(addCount, interval);

    function addCount() {
      console.log(interval);
      counterClick = counterClick + 1 * multiplicatorCandycane;
      counter.innerText = counterClick;
    }
  });

  //emily modifier
  //==============
  document.getElementById("emily").addEventListener("click", () => {
    emilyModifier += 1;
    alert("Chocolat? \n" + "A présent vos clicks sont x " + emilyModifier);

    //update price and counter
    counterClick = counterClick - priceemily;
    counter.innerText = counterClick;
    disableemily();
    priceemily = priceemily + 15;
    document.getElementById("emily").innerText =
      "Add another emily for " + priceemily;
    //
    //add images in the right place
    const emilyImage = document.createElement("img");
    emilyImage.setAttribute("src", "assets/img/icone/Emilie.png");
    emilyImage.setAttribute("class", "img-fluid");
    emilyImage.setAttribute("width", "100px");
    const target = document.getElementById("emily-container");
    target.appendChild(emilyImage);
  });

  //Disablers
  //========
  function disableemily() {
    if (counterClick < priceemily) {
      document.getElementById("emily").disabled = true;
    } else {
      document.getElementById("emily").disabled = false;
    }
  }

  function disableCandycane() {
    if (counterClick < priceCandycane) {
      document.getElementById("candycane").disabled = true;
    } else {
      document.getElementById("candycane").disabled = false;
    }
  }
  function disablePetitdej() {
    document.getElementById("petitdej").disabled = true;
    imageCuisto.setAttribute("src", "");
  }
  //PetitDej
  //========
  function enable() {
    document.getElementById("petitdej").disabled = false;
    imageCuisto.setAttribute("src", "assets/img/cuisto2.png");
    let my_timeout = setTimeout(function() {
      document.getElementById("petitdej").disabled = true;
      imageCuisto.setAttribute("src", " ");
    }, 5000);
  }

  function time() {
    disablePetitdej();
    disableemily();
    disableCandycane();
    let nbr = Math.floor(Math.random() * 20);
    let time = nbr * 1000;
    setTimeout(enable, time);
    console.log(time);
  }

  document.getElementById("petitdej").addEventListener("click", () => {
    petitDej = true;
    setTimeout(function() {
      petitDej = false;
      console.log("repasse en false");
      imageCuisto.setAttribute("src", " ");
      time();
    }, 5000);
  });

  window.onload = time;
})();
