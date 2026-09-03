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
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',    
    stagePadding: 0,
    autoWidth: false
});
    $('#choice_slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 3.29297L4.29297 12L13 20.707L13.707 20L6.20697 12.5H19.5V11.5H6.20697L13.707 3.99997L13 3.29297Z" fill="#6B8F71"/></svg>',
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 12.5H17.793L10.293 20L11 20.707L19.707 12L11 3.29303L10.293 4.00003L17.793 11.5H4.5V12.5Z" fill="#6B8F71"/></svg>'
    ],
    dots: false,
    autoplay: false,
    margin: 0, 
    stagePadding: 0,
    autoWidth: false
});
});



