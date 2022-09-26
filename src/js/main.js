const GetStarted = document.getElementById("movies-getStarted");
const Logout = document.getElementById("movies-logout");
const Header = document.getElementById("header");
const Main = document.getElementById("main");

const LOCAL_PREFIX = "movie-finder-";
const RANDOM = Math.floor(Math.random() * 1000000000);

const find = localStorage.getItem("token");

function set(name, value) {
  localStorage.setItem(name, `${LOCAL_PREFIX}${value}`);
}

function del(name) {
  localStorage.removeItem(name);
}

// Start the token process
GetStarted.addEventListener("click", () => {
  if (find) {
    alert("You already have joined!");
  } else {
    set("token", `${RANDOM}`);
    window.location.reload();
  }
});

// Delete the users token
Logout.addEventListener("click", () => {
  del("token");
  window.location.reload();
});

// The users has a token
if (find) {
  Header.remove();
} else {
  Main.remove();
}
