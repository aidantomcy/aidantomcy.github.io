const darkLightBtn = document.getElementById("dark-light-toggle");
const root = document.querySelector(":root");

const setLight = () => {
  root.style.setProperty("--background-color", "#fff");
  root.style.setProperty("--text-color", "#333");
  root.style.setProperty("--hover-text-color", "#000");
  root.style.setProperty("--text-gray-300", "#ccc");
  root.style.setProperty("--text-gray-500", "#a0aec0");
  darkLightBtn.innerHTML = '<div class="pb-2">Let there be darkness</div>';
  document.body.classList.remove("dark");
  document.body.classList.add("light");

  localStorage.setItem("theme", "light");
};

const setDark = () => {
  root.style.setProperty("--background-color", "#1f1f1f");
  root.style.setProperty("--text-color", "#ccc");
  root.style.setProperty("--hover-text-color", "#fff");
  root.style.setProperty("--text-gray-300", "#cbd5e1");
  root.style.setProperty("--text-gray-500", "#6b7280");
  darkLightBtn.innerHTML = '<div class="pb-2">Let there be light</div>';
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

if (localStorage.getItem("theme") === null) {
  document.body.classList.add("dark");
} else if (localStorage.getItem("theme") === "dark") {
  setDark();
} else {
  setLight();
}

darkLightBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    setLight();
  } else {
    setDark();
  }
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
