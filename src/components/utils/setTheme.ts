import { themeStore } from "../stores/themeStore";

const setTheme = (theme: Themes) => {
  if (theme === "dark") {
    themeStore.set("dark");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (theme === "light") {
    themeStore.set("light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

export default setTheme;
