$(".slider").slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: true,
});
// const modal = document.getElementById("modal");

// modal.addEventListener("shown.bs.modal", () => {
//   console.log("modal clicked");
// });

const Clicked = () => {
  console.log("clicked");
};


