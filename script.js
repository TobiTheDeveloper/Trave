document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.getElementById("mainContainer");
  const navbarToggle = document.querySelector(".navbar-toggler");

  navbarToggle.addEventListener("click", function () {
    if (mainContainer.classList.contains("expanded")) {
      mainContainer.style.height = "auto"; // Set to auto to allow content to determine height
    } else {
      mainContainer.style.height = `${mainContainer.scrollHeight}px`;
    }

    mainContainer.classList.toggle("expanded");
  });
});

function calculateCost() {
  const startLocation = getElementById('startLocation').value;
  const endLocation = getElementById('endLocation').value;

}
