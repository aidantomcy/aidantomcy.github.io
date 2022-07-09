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
  setDark(darkLightBtn);
} else {
  setLight(darkLightBtn);
}

darkLightBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    setLight(darkLightBtn);
  } else {
    setDark(darkLightBtn);
  }
});

document.addEventListener("contextmenu", (e: Event) => {
  e.preventDefault();
});
