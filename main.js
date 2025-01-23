import "flowbite";
import { doc } from "prettier";

const buttons = document.querySelectorAll("nav ul a");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    buttons.forEach((btn) => {
      btn.classList.remove("bg-[#ffafcc]");
    });
    button.classList.add("bg-[#ffafcc]");
  });
});

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  sunIcon.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  } else {
    sunIcon.classList.add("display-none");
  }
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  }
};

sunIcon.addEventListener("click", themeSwitch);

moonIcon.addEventListener("click", themeSwitch);

themeCheck();

const goToProjects = document.querySelector(".projects-button");

goToProjects.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
});

const formSubmit = document.querySelector(".submit-btn");