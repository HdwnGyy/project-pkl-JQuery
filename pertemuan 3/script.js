$(document).ready(function(){
    $('#click').click(function(){
        alert('Saya Sedang Belajar JQuery')
    });

    $('#dblclick').dblclick(function(){
        $(this).css('background-color', 'skyblue')
    });

    $('.mouse').mouseleave(function(){
        $(this).css('background-color', 'skyblue')
    });

    $('.mouse').mouseenter(function(){
        $(this).css('background-color', 'gray')
    });

    $('#keydown').keydown(function(){
        $('#pesan_keydown').text($(this).val())
    });

    $('#keyup').keyup(function(){
        $('#pesan_keyup').text($(this).val())
    });
})