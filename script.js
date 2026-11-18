// Alert when the main heading is clicked
document.querySelector(".hero h1").addEventListener("click", function () {
  alert("Welcome to my portfolio!");
});

// Highlights a card when the mouse moves over it
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    card.style.transform = "translateY(-5px)";
    card.style.transition = "transform 0.2s ease";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "translateY(0)";
  });
});