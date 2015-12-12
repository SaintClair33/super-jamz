//var pointsArray = document.getElementsByClassName('point'); vanilla js
 
//var animatePoints = function(points) { vanilla js
var animatePoints = function() { //jquery route
     
     //var revealPoint = function (index)
       var revealPoint = function()
     {
         $(this).css({opacity: 1, transform: 'scaleX(1) translateY(0)'});//jquery route
     };
         
        $.each($('.point'), revealPoint);

         
     };
 
$(document).ready(function(){
    
        if ($(window).height() > 950) //jquery
        {
            
            animatePoints();
        }
    
        var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
     //window.addEventListener("scroll", function(event) {
    $(window).scroll(function(event) {
     //if (document.body.scrollTop >= scrollDistance) 
        if($(window).scrollTop() >= scrollDistance)
     {
        //animatePoints(pointsArray);
         console.log("test");
         animatePoints();
     }
    });

})  
     

