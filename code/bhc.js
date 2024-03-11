document.addEventListener("DOMContentLoaded", function () {
    var cardImages = document.querySelectorAll(
      "#card1-image, #card2-image, #card3-image"
    );
    cardImages.forEach(function (cardImage) {
      var socialIconsHTML =
        '<div class="social-icons">' +
        '<a href="#"><i class="fab fa-instagram"></i></a>' +
        '<a href="#"><i class="fab fa-facebook"></i></a>' +
        "</div>";
      cardImage.parentNode.insertAdjacentHTML("beforeend", socialIconsHTML);
    });
  });