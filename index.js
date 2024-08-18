// You can add any dynamic functionality here if needed
// Simple form submission alert for demo purposes
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Merci pour votre message !");
});
const btn = document.querySelector(".btn-gold");
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "#ccc"; // Change la couleur de fond au survol
});
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "gold"; // Remet la couleur d'origine
});
