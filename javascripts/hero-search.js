document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hero-search").forEach(function (button) {
    button.addEventListener("click", function () {
      var input = document.querySelector(".md-search__input");
      if (input) {
        input.focus();
      }
    });
  });
});
