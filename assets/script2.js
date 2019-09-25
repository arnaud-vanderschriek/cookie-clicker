(() => {
  let counterClick = 0;
  let multiplicatorCandycane = 0;
  let priceCandycane = 15;
  let priceEmilie = 15;
  let emilieModifier = 1;
  let petitDej = false;
  const cookie = document.getElementById("cookie");
  const counter = document.getElementById("counter");
  const imageCuisto = document.getElementById("cuisto");

  //add click to counter
  cookie.addEventListener("click", () => {
    if (petitDej == true) {
      counterClick = counterClick + 1 * 3;
    }
    if (emilieModifier > 1) {
      counterClick = counterClick + 1 * emilieModifier;
    } else {
      counterClick = counterClick + 1;
    }
    disableEmilie();
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
    const target = document.getElementById("emilie-container");
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

  //Emilie modifier
  //==============
  document.getElementById("emilie").addEventListener("click", () => {
    emilieModifier += 1;
    alert("Chocolat? \n" + "A présent vos clicks sont x " + emilieModifier);

    //update price and counter
    counterClick = counterClick - priceEmilie;
    counter.innerText = counterClick;
    disableEmilie();
    priceEmilie = priceEmilie + 15;
    document.getElementById("emilie").innerText =
      "Add another Emilie for " + priceEmilie;
    //
    //add images in the right place
    const emilieImage = document.createElement("img");
    emilieImage.setAttribute("src", "assets/img/emilie.jpg");
    emilieImage.setAttribute("class", "img-fluid");
    emilieImage.setAttribute("width", "100px");
    const target = document.getElementById("emilie-container");
    target.appendChild(emilieImage);
  });

  //Disablers
  //========
  function disableEmilie() {
    if (counterClick < priceEmilie) {
      document.getElementById("emilie").disabled = true;
    } else {
      document.getElementById("emilie").disabled = false;
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
    }, 10000);
  }

  function time() {
    disablePetitdej();
    disableEmilie();
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
      time();
    }, 10000);
  });

  window.onload = time;
})();
