type Themes = "dark" | "light";
const btnText = ["Let there be darkness", "Let there be light"];

const setTheme = (theme: Themes, btn: HTMLButtonElement): void => {
  btn.textContent = theme === "dark" ? btnText[1] : btnText[0];
  document.body.classList.remove(theme === "dark" ? "light" : "dark");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
};

export { setTheme };
