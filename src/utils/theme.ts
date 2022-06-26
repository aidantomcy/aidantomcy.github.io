const setLight = (): void => {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  localStorage.setItem("theme", "light");
};

const setDark = (): void => {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

export { setDark, setLight };
