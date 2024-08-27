$(document).ready(function(){
    $('#hide').click(function(){
        $('#kotak').hide('1000');
    });

    $('#show').click(function(){
        $('#kotak').show('1000')
    });

    $('#fadeout').click(function(){
        $('.box1').fadeOut();
        $('.box2').fadeOut(1000);
        $('.box3').fadeOut(3000);
    });

    $('#fadein').click(function(){
        $('.box1').fadeIn();
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(4000);
    });


     $('#fadeToggle').click(function(){
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(4000);
    });

    $('#fadeTo').click(function(){
        $('.box1').fadeTo("slow", 0.2); // Correct opacity value
        $('.box2').fadeTo("slow", 0.3); // Correct opacity value
        $('.box3').fadeTo("slow", 0.4); // Correct opacity value
    });

    $('#slideUp').click(function() {
        $('#slide').slideUp("slow");
    });

    $('#slideDown').click(function() {
        $('#slide').slideDown(1000);
    });

    $('#slideToggle').click(function() {
        $('#slide').slideToggle(1000);
    });

    $('#fadeToggle').click(function(){
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(4000);
    });

    $('#fadeTo').click(function(){
        $('.box1').fadeTo("slow", 0.2); // Correct opacity value
        $('.box2').fadeTo("slow", 0.3); // Correct opacity value
        $('.box3').fadeTo("slow", 0.4); // Correct opacity value
    });

    $('#slideUp').click(function() {
        $('#slide').slideUp("slow");
    });

    $('#slideDown').click(function() {
        $('#slide').slideDown(1000);
    });

    $('#slideToggle').click(function() {
        $('#slide').slideToggle(1000);
    });

    $('#kiri').click(function() {
        $('#animate-box').animate({'left': "-=50px"}, "slow");
    });

    $('#kanan').click(function() {
        $('#animate-box').animate({'right': "-=50px"}, "slow");
    });

    $('#start').click(function() {
        $('#clearQueue-Box').animate({'left' : '+=500'}, 5000);
        $('#clearQueue-Box').queue(function() {
        });
    });

    $('#stop').click(function() {
        $('#clearQueue-Box').clearQueue();
        $('#clearQueue-Box').stop();
    });

    $('#delay').click(function() {
        $('#kotak-satu').slideUp(4000).delay(6000).fadeIn(4000);
        $('#kotak-dua').slideUp(4000).fadeIn(4000);
    });
    
});