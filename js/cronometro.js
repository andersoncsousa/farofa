//Autor: Caique Sousa

// Cronometro
// Set the date we're counting down to
var dataFinal = new Date("Oct 24, 2019 11:00:00").getTime();

// Update the count down every 1 second
var crono = setInterval(function() {

    // Get todays date and time
    var dataAtual = new Date().getTime();
    
    //
    // Find the distance between now and the count down date
    var distance = dataFinal - dataAtual;
    
    // Time calculations for days, hours, minutes and seconds
    var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("cronometro").innerHTML = dias + "d " + horas + "h "
    + minutos + "m " + segundos + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(crono);
    document.getElementById("cronometro").innerHTML = "Chegoooooooou o Grande Dia";
    }
}, 1000);