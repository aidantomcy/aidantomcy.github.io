"use strict";
const darkLightBtn = (document.getElementById("dark-light-toggle"));
const setLight = () => {
    darkLightBtn.innerHTML = '<div class="pb-2">Let there be darkness</div>';
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
};
const setDark = () => {
    darkLightBtn.innerHTML = '<div class="pb-2">Let there be light</div>';
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
};
if (localStorage.getItem("theme") === null) {
    document.body.classList.add("dark");
}
else if (localStorage.getItem("theme") === "dark") {
    setDark();
}
else {
    setLight();
}
darkLightBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        setLight();
    }
    else {
        setDark();
    }
});
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
//# sourceMappingURL=script.js.map