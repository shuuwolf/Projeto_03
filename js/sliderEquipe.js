$(function(){
    
    var delay = 3000;
    var curIndex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        var amt = $('.author').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.author').css('width',sizeBoxSingle + '%');
        $('.scroll-wrapper').css('width',sizeContainer + '%');

        for(var i = 0; i < amt; i++){
            if(i == 0){
              $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>'); 
            }else{
                $('.slider-bullets').append('<span></span>'); 
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);        
        },delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.author').eq(curIndex).offset().left -$('.scroll-wrapper').offset().left;
        $('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'rgb(170,170,170)');
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })
})