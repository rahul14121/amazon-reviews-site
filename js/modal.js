document.addEventListener("DOMContentLoaded", function () {
  var box = document.querySelectorAll(".modal");
  M.Modal.init(box, {
    opacity: 0.6,
    inDuration: 300,
    outDuration: 375,
    dismissible: false
  });
});