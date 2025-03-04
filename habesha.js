//Special of the day Js implementation
document.addEventListener("DOMContentLoaded", function () {
  const specials = [
    "Doro Wat - Spicy chicken stew with hard-boiled eggs",
    "Kitfo - Minced raw beef seasoned with spices",
    "Shiro Wat - Chickpea stew cooked with berbere spice",
    "Tibs - Sautéed meat with onions and peppers",
    "Gomen - Collard greens simmered with garlic and spices",
  ];

  const randomSpecial = specials[Math.floor(Math.random() * specials.length)];
  document.getElementById(
    "day-special"
  ).textContent = `Today's Special: ${randomSpecial}`;
});

//Form Submission Js Implementation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from reloading the page
    document.getElementById("form-message").textContent =
      "Thank you for your submission!";
  });
