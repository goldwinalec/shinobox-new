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
var video = document.getElementById('video');
var progressBar = document.getElementById('progress');

function play() {
    if (video.paused) {
        document.getElementById('icon').classList.add('player__pause');
        document.getElementById('icon').classList.remove('player__play');
        video.play()
    } else {
        document.getElementById('icon').classList.remove('player__pause');
        document.getElementById('icon').classList.add('player__play');
        video.pause();
    }
    setInterval(function(){
        var d = video.duration;
        var c = video.currentTime;
        var m = parseInt(c/60);
        var s = parseInt(c%60);
        if(m<10) {
            document.getElementById("minutes").innerHTML = "0" + m ;
            } else {
            document.getElementById("minutes").innerHTML = "" + m;
            }
        if(s<10){
            document.getElementById("seconds").innerHTML = "0" + s ;
            }else{
            document.getElementById("seconds").innerHTML = "" + s ;
            }
        var progress = document.querySelector(".player__filled"); 
        progress.style.width = (c * 100) / d + '%';
        
    });
}
function scrub(e) {
    const scrubTime = ( e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function ended() {
    document.getElementById('icon').classList.remove('player__pause');
    document.getElementById('icon').classList.add('player__play');
}

progressBar.addEventListener('click', scrub);
video.addEventListener("ended", ended);
video.addEventListener('click', play);

// слайдер
$('#slider-4').slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$(window).on('load resize', function() {
  if ($(window).width() < 886) {
    $('#slider-3:not(.slick-initialized)').slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      responsive: [
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
  } else {
    $("#slider-3.slick-initialized").slick("unslick");
  }
});
$(window).on('load resize', function() {
  if ($(window).width() < 767) {
    $('#slider-2:not(.slick-initialized)').slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
  } else {
    $("#slider-2.slick-initialized").slick("unslick");
  }
});
$(window).on('load resize', function() {
  if ($(window).width() < 767) {
    $('#slider-1:not(.slick-initialized)').slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
  } else {
    $("#slider-1.slick-initialized").slick("unslick");
  }
});