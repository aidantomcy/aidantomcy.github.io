import "./scss/styles.scss";
import { setDark, setLight } from "./utils/theme";

const darkLightBtn = <HTMLButtonElement>(
  document.getElementById("dark-light-toggle")
);

if (
  localStorage.theme === "dark" ||
  !(
    "theme" in localStorage &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
) {
  darkLightBtn.innerHTML = '<div class="pb-2">Let there be light</div>';
  setDark();
} else {
  darkLightBtn.innerHTML = '<div class="pb-2">Let there be darkness</div>';
  setLight();
}

darkLightBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    darkLightBtn.innerHTML = '<div class="pb-2">Let there be darkness</div>';
    setLight();
  } else {
    darkLightBtn.innerHTML = '<div class="pb-2">Let there be light</div>';
    setDark();
  }
});

document.addEventListener("contextmenu", (e: Event) => {
  e.preventDefault();
});
