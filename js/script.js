$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  let height = document.documentElement.clientHeight;
  $("video").attr("height", height-50)
});

$(document).ready(function () {
  $(".collapsible").collapsible();
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// let i = 0;
// let images = $('.hide');
// $('#button').click(addPhoto);
// let row = 0;
// let column = 0;

// function addPhoto(){
//   console.log("add");
//   console.log("col " +column);
//   console.log("row " + row);
//   let images =document.getElementsByClassName('img');
//   // перехід на новий рядок
//   if(column > 12){
//     row++;
//     column = 0
//   }
//   // показуємо в рядку 3 картинки
//   if(column === 0){
//     images[row + column].classList.remove('hide');
//   } else{
//     column += 3;
//     images[row + column].classList.remove('hide');
//   }
//   column++
// }

let i = 0;
let images = $(".image");
console.log(images);
$("#button").click(addPhoto);

function addPhoto() {
  if (i < 12) {
    i++;
    if (i % 3 == 1) {
      images[(i - 1) / 3].classList.remove("hide");
      if (i==1) $(".row1").removeClass("hide")
      console.log(i);
    } else if (i % 3 == 2) {
      images[(i - 2) / 3 + 4].classList.remove("hide");
      console.log(i);
    } else if (i % 3 == 0) {
      images[i / 3 + 7].classList.remove("hide");
      console.log(i);
      if (i==12) $("#button").addClass("hide");
    }
  };
}
