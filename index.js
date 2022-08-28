console.log("File included!");
let swtich = document.getElementById("ball");
swtich.addEventListener("click", swtichTo);


function swtichTo(){
    console.log("Turning lights off!");
    let dark = document.getElementById("darkMode");
    dark.classList.toggle("darkMode");
    
    let motio = document.getElementById("ball");
    motio.classList.toggle("ball");

    motio.classList.toggle("transi");

}