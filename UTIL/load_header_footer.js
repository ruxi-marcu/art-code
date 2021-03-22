$(document).ready(function () {
    $('header').load("../UTIL/pheader.html",function() {

        $('.hero-headline').text($('title').text());

        $('.hamburger-menu').on('click', function () {
            // console.log('hambutger clicked');
            $('.toggle').toggleClass('open');
            $('.nav-list').toggleClass('open');
        });
    });

    $('footer').load("../UTIL/pfooter.html");

});

