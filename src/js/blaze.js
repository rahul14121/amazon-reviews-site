const slider = document.querySelector('.blaze-slider');
new BlazeSlider(slider, {
  all: {
    enableAutoplay: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    transitionDuration: 300
  },
  "(max-width: 900px)": {
    slidesToShow: 2,
    slidesToShow: 2,
    slidesGap: "40px"
  },
  "(max-width: 500px)": {
    slidesToShow: 1,
    slidesToScroll: 1
  }
});