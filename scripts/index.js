$(document).ready(function() {
    $('#slider').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    margin: 0,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    margin: 0,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
    
});
});

var slaiderFirst = function() {   
    $('#karusel_2').show();   
}
var slaiderSecond = function() { 
    $('#karusel_3').show();
}
var slaiderThird = function() {
    $('#karusel_1').show();   
}

