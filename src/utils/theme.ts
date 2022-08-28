/// <reference path="../types/theme.d.ts" />
const themeConfig = {
  theme: "dark",
  btnText: "Let there be darkness",
};

const setTheme = (theme: Themes, btn: HTMLButtonElement): void => {
  themeConfig.btnText =
    theme === "dark" ? "Let there be light" : "Let there be darkness";
  btn.textContent = themeConfig.btnText;
  themeConfig.theme = theme;
  document.body.classList.remove(
    themeConfig.theme === "dark" ? "light" : "dark"
  );
  document.body.classList.add(themeConfig.theme);
  localStorage.setItem("theme", themeConfig.theme);
};

export { setTheme };
