const GetStarted = document.getElementById("movies-getStarted");
const Header = document.getElementById("header");

const LOCAL_PREFIX = "movie-finder-";
const RANDOM = Math.floor(Math.random() * 1000000);

const find = localStorage.getItem("token");

function set(name, value) {
  localStorage.setItem(name, `${LOCAL_PREFIX}`);
}

GetStarted.addEventListener("click", () => {
  if (find) {
    alert("You already have joined!");
  } else {
    set("token", `${RANDOM}`);
    window.location.reload();
  }
});

// The users has a token
if (find) {
  Header.remove();
}
