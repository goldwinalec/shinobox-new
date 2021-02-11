// аккордеон в блоке дополнительные услуги
$('.accordion__title').on('click', function(){

    $('.accordion__item').removeClass('accordion__item--active');
    $(this).parent().addClass('accordion__item--active');

})