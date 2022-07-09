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
  darkLightBtn.textContent = "Let there be light";
  setDark();
} else {
  darkLightBtn.textContent = "Let there be darkness";
  setLight();
}

darkLightBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    darkLightBtn.textContent = "Let there be darkness";
    setLight();
  } else {
    darkLightBtn.textContent = "Let there be light";
    setDark();
  }
});

document.addEventListener("contextmenu", (e: Event) => {
  e.preventDefault();
});
