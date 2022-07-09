const setLight = (btn: HTMLButtonElement): void => {
  btn.textContent = "Let there be darkness";
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  localStorage.setItem("theme", "light");
};

const setDark = (btn: HTMLButtonElement): void => {
  btn.textContent = "Let there be light";
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

export { setDark, setLight };
