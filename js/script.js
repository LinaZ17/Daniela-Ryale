$('.sl_man').slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  dots: false,
   autoplay: true
});

// ______________



$('.catalog_photos').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 1500,
  autoplay: true
});

// ______________________________


var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


