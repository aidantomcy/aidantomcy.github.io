const button = document.getElementById("projects-button");

button.onclick = () => (window.location.href = "projects.html");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
