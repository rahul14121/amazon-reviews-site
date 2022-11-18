var _maxWidth900px;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var slider = document.querySelector('.blaze-slider');
new BlazeSlider(slider, {
  all: {
    enableAutoplay: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    transitionDuration: 300
  },
  "(max-width: 900px)": (_maxWidth900px = {
    slidesToShow: 2
  }, _defineProperty(_maxWidth900px, "slidesToShow", 2), _defineProperty(_maxWidth900px, "slidesGap", "40px"), _maxWidth900px),
  "(max-width: 500px)": {
    slidesToShow: 1,
    slidesToScroll: 1
  }
});