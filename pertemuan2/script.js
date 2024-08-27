$(document).ready(function() {
    $('h1').css('color', 'red');
    $('p').css('color', 'purple');

    //selector class
    $('.judul').css('background-color', 'Gray' );
    $('.paragraf').css('color', 'brown');

    //selector id
    $('#judul').css('border', '2px solid black');
    $('#paragraf').css('border', '2px solid purple');

    $('*').css('background-color', 'skyblue');

    $('h4:eq(2)').css('background-color', 'purple');

    $('input:submit').css('background-color', 'green');
    $('input:button').css('padding', '20px');
})