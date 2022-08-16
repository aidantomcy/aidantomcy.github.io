const btnText = ["Let there be darkness", "Let there be light"];

const setLight = (btn: HTMLButtonElement): void => {
  btn.textContent = btnText[0];
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  localStorage.setItem("theme", "light");
};

const setDark = (btn: HTMLButtonElement): void => {
  btn.textContent = btnText[1];
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

export { setDark, setLight };
