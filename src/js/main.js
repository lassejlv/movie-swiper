const GetStarted = document.getElementById("movies-getStarted");
const Header = document.getElementById("header");
const Main = document.getElementById("main");
const App = document.getElementById("app");
const checkboxNotRobot = document.getElementById("checkboxNotRobot");

const LOCAL_PREFIX = "movie-finder-";
const RANDOM = Math.floor(Math.random() * 1000000000);

const findToken = localStorage.getItem(`${LOCAL_PREFIX}token`);

if (findToken) {
  window.location.href = "/app";
}

// Start the token process
GetStarted.addEventListener("click", () => {
  if (!checkboxNotRobot.checked) {
    alert("You have to check the checkbox!'");
  } else if (checkboxNotRobot.checked) {
    if (findToken) {
      window.location.href = "/app";
    } else {
      const name = prompt("What is your name?");

      if (!name) {
        set("name", `user-${RANDOM}`);
      } else {
        set("name", name);
      }

      set("token", RANDOM);

      set("createdAt", new Date().toISOString().split("T")[0]);

      window.location.href = "/";
    }
  }
});
