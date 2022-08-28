type Themes = "dark" | "light";
type BtnText = "Let there be darkness" | "Let there be light";
let btnText: BtnText = "Let there be darkness";

const setTheme = (theme: Themes, btn: HTMLButtonElement): void => {
  btnText = theme === "dark" ? "Let there be light" : "Let there be darkness";
  btn.textContent = btnText;
  document.body.classList.remove(theme === "dark" ? "light" : "dark");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
};

export { setTheme };
