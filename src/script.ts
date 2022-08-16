import "./scss/styles.scss";
import { setTheme } from "./utils/theme";

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
  setTheme("dark", darkLightBtn);
} else {
  setTheme("light", darkLightBtn);
}

darkLightBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    setTheme("light", darkLightBtn);
  } else if (document.body.classList.contains("light")) {
    setTheme("dark", darkLightBtn);
  }
});
