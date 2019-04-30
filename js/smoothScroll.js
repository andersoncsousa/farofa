//Autor: Caique Sousa

//  SmoothScroll
function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPostition = window.pageYOffset;
    var distance = targetPosition - startPostition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPostition,distance,duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d){
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // function ease(t, b, c, d){
    //     return c * Math.sin(t/d * (Math.PI/2)) + b;
    // }

    requestAnimationFrame(animation);
}

var btnTopo = document.querySelector('.btnUpTopo');
// var icoHome = document.querySelector('.nav-home-icon');

// var home = document.querySelector('.nav-home');
// var orquestra = document.querySelector('.nav-orquestra');
// var musica = document.querySelector('.nav-musica');
// var galeria = document.querySelector('.nav-galeria');
// var danca = document.querySelector('.nav-danca');

    btnTopo.addEventListener('click', function(){
        smoothScroll('.home', 1000);
    });

    // icoHome.addEventListener('click', function(){
    //     smoothScroll('.home', 1000);
    // });

    // home.addEventListener('click', function(){
    //     smoothScroll('.home', 1000);
    // });

    // orquestra.addEventListener('click', function(){
    //     smoothScroll('.orquestra', 1000);
    // });

    // musica.addEventListener('click', function(){
    //     smoothScroll('.musicaInstrumental', 1000);
    // });

    // galeria.addEventListener('click', function(){
    //     smoothScroll('.galeria', 1000);
    // });

    // danca.addEventListener('click', function(){
    //     smoothScroll('.danca', 1000);
    // });