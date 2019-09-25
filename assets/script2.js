(()=>{
    let counterClick=0;
    let multiplicatorCandycane = 0;
    let priceCandycane = 15;
    let priceEmilie = 15;
    let emilieModifier = 1;
    let petitDej = false;
    const cookie = document.getElementById("cookie");
    const counter = document.getElementById("counter");
    const bigBox = document.getElementById("big-box");

    //add click to counter
    cookie.addEventListener( "click" , () => {
    console.log("yes");
    if (petitDej == true){
    counterClick = (counterClick + 1)*2;
    }
    if (emilieModifier > 1){
        counterClick = counterClick + (1*emilieModifier);
    } 
    else {
    counterClick = counterClick + 1;
    }
    disableEmilie();
    disableCandycane();
    document.getElementById("counter").innerText = counterClick;
});

//Counter onchange check buttons
//=============================
bigBox.addEventListener("mousemove", disableEmilie);
bigBox.addEventListener("mousemove", disableCandycane);

//Candycane modifier
//=================
document.getElementById("candycane").addEventListener("click", () => {
    
    multiplicatorCandycane+=1; 
    
    //remove price from counter
    counterClick = counterClick - priceCandycane;
    counter.innerText = counterClick;
    disableCandycane();
    //update the price
    priceCandycane = priceCandycane + 15;
    document.getElementById("candycane").innerText = ("Add another Candy Cane for "+priceCandycane);
    // images in the right place
    const candyImage = document.createElement("img");
    candyImage.setAttribute("src","assets/img/candycane.png");
    candyImage.setAttribute("class", "img-fluid");
    candyImage.setAttribute("width","100px");
    const target = document.getElementById("emilie-container")
    target.appendChild(candyImage);
    
    //create autoclicker
    let interval = 5000;
    let run = setInterval(addCount,interval);
    
    function addCount() {
        console.log(interval);
        counterClick = counterClick+(1*multiplicatorCandycane);
        counter.innerText = counterClick;

    }
    
   });

//Emilie modifier
//==============
    document.getElementById("emilie").addEventListener("click", () => {
    emilieModifier+=1;
    alert("Chocolat? \n"+"A présent vos clicks sont x "+emilieModifier);
    
    //update price and counter
    counterClick = counterClick - priceEmilie;
    counter.innerText = counterClick;
    disableEmilie();
    priceEmilie = priceEmilie + 15;
    document.getElementById("emilie").innerText = ("Add another Emilie for "+priceEmilie);
    //
    //add images in the right place
    const emilieImage = document.createElement("img");
    emilieImage.setAttribute("src","assets/img/emilie.jpg");
    emilieImage.setAttribute("class", "img-fluid");
    emilieImage.setAttribute("width","100px");
    const target = document.getElementById("emilie-container")
    target.appendChild(emilieImage);
    
    });



//Disablers
//========
  function disableEmilie() {
    if (counterClick < priceEmilie) {
        console.log("disable emilie on");
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

//PetitDej
//========
    //make this only possible ever x seconds 
    //timer function - disable button
    //could work with setAttribute(style, display: hidden;)
function timer() {
    let timeRandom = Math.floor((Math.random*100)+20);
    let buttonEnable = 10;
    //decrease timeRandom with 1 each 1000 millisecond with probably a setInterval
    //runs until = 0 (do while loop)
    //while it runs button is disabled
    //when = 0 new function starts
    //functions enables button during 10 seconds
    //at the end turns variable petitdej to false
}

document.getElementById("petitdej").addEventListener( "click", () => {
    petitDej = true;
});

})();
