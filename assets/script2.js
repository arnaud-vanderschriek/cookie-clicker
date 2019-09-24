(()=>{
    let counterClick=0;
    let multiplicatorCandycane = 0;
    let priceCandycane = 15;
//add click to counter
document.getElementById("cookie").addEventListener( "click" , () => {
    console.log("yes");
    counterClick = counterClick + 1;
    document.getElementById("counter").innerText = counterClick;
});

//candycane modifier
document.getElementById("candycane").addEventListener("click", () => {
    multiplicatorCandycane=+1;
    counterClick = counterClick - priceCandycane;
    document.getElementById("counter").innerText = counterClick;
    priceCandycane = priceCandycane + 15;
    document.getElementById("candycane").innerText = ("Add another Candy Cane for "+priceCandycane);


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

})();
