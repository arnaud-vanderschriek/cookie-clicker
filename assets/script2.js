(()=>{
    let counterClick=0;
    let multiplicatorCandycane = 0;
    let priceCandycane = 15;
    let petitDej = new boolean;

    //make the disabler run whenever the mouse mouves
document.getElementById("body").addEventListener("mouseover", () => {
    disable();
});

    //add click to counter
document.getElementById("cookie").addEventListener( "click" , () => {
    if (petitDej == true){
    counterClick = (counterClick + 1)*2;
    }
    else {
    counterClick = counterClick + 1;}
    document.getElementById("counter").innerText = counterClick;
});

//Candycane modifier
//=================
document.getElementById("candycane").addEventListener("click", () => {
    console.log("candycane");
    multiplicatorCandycane=+1; //value to decrease the time interval
    //remove price from counter
    counterClick = counterClick - priceCandycane;
    document.getElementById("counter").innerText = counterClick;
    //update the price
    priceCandycane = priceCandycane + 15;
    document.getElementById("candycane").innerText = ("Add another Candy Cane for "+priceCandycane);
    
    const candyImage = document.createElement("img");
    candyImage.setAttributes("src","assets/img/candycane.png");
    const target = document.getElementById("emilie-container")

//got this from Stack Exchange, doesn't seem to work
    let interval = 5000;
    let run = setInterval(addcount,interval);
    
    function addCount() {
        console.log(interval);
        clearInterval(run); 
        interval = (5000 / multiplicatorCandycane);
        counterClick = counterClick+1;
        run = setInterval(addCount,interval);
    }
    
   });

//Emilie modifier
//==============
document.getElementById("emilie").addEventListener("click", () => {
    console.log("emilie")
    alert("Chocolat?");
});


//Disabler
//=======
  function disable() {
    if (counterClick < price) {
      document.getElementById("emilie").disabled = true;
      document.getElementById("candycane").disabled = true;
    } else {
      document.getElementById("emilie").disabled = false;
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

}

window.onload //play timer function on load to start out with the petitdej disabled for x seconds
})();
