$(document).ready(function(){
    alert("þetta virkar hjá þér Ottó");

    //hamburger menu toggle
    $('.nav-toggle').click(function() {
        $('.main-nav').toggleClass('is-open');
        $('.hamburger').toggleClass('is-open');
    })
})