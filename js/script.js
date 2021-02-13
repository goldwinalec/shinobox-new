// аккордеон в блоке дополнительные услуги
$('.accordion__title').on('click', function(){

    $('.accordion__item').removeClass('accordion__item--active');
    $(this).parent().addClass('accordion__item--active');

});
//

// блок "нам доверяют"
$('.clients__item-link').on('click', function(evt){
    evt.preventDefault();
    $('.clients__item').removeClass('clients__item--hidden');
    $('.clients__item-link').addClass('clients__item-link--hidden');
});





// плеер

