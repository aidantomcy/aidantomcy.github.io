type Themes = "dark" | "light";
const btnText = ["Let there be darkness", "Let there be light"];
let currentTheme: Themes = "dark";

const setLight = (btn: HTMLButtonElement): void => {
  currentTheme = "light";
  btn.textContent = btnText[0];
  document.body.classList.remove("dark");
  document.body.classList.add(currentTheme);
  localStorage.setItem("theme", currentTheme);
};

const setDark = (btn: HTMLButtonElement): void => {
  btn.textContent = btnText[1];
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

export { setDark, setLight };
