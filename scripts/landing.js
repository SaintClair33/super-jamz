//var pointsArray = document.getElementsByClassName('point'); vanilla js
 
//var animatePoints = function(points) { vanilla js
var animatePoints = function() { //jquery route
     
     //var revealPoint = function (index)
       var revealPoint = function()
     {
         $(this).css({opacity: 1, transform: 'scaleX(1) translateY(0)'});//jquery route
     };
         //points[index].style.opacity = 1;
         //points[index].style.transform = "scaleX(1) translateY(0)";
         //points[index].style.msTransform = "scaleX(1) translateY(0)";
         //points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    
    //for (var i = 0; i < points.length; i++)
     //{
       //revealPoint(i);   
     //}
        $.each($('.point'), revealPoint);

         
     };
 
     
     
//window.onload = function() vanilla js route      
$(window).load = (function() {//jquery 

        // Automatically animate the points on a tall screen where scrolling   can't trigger the animation
    //if (window.innerHeight > 950) vanilla js route
    if ($(window).height() > 950) //jquery
        {
            //animatePoints(pointsArray);//vanilla js
            animatePoints();
        }
     //var sellingPoints = document.getElementsByClassName('selling-points')[0]; vanilla js
     //var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200; vanilla js
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
     //window.addEventListener("scroll", function(event) {
    $(window).scroll(function(event) {
     //if (document.body.scrollTop >= scrollDistance) 
        if($(window).scrollTop() >= scrollDistance)
     {
        //animatePoints(pointsArray);
         animatePoints();
     }
    });
});

 
