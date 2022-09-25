const getStarted = document.getElementById("movies-getStarted");
const Header = document.getElementById("header");

const LOCAL_PREFIX = "movie-finder-";
const RANDOM = Math.floor(Math.random() * 1000000);

const find = localStorage.getItem("token");

function set() {
  localStorage.setItem("token", `${LOCAL_PREFIX}${RANDOM}`);
}

getStarted.addEventListener("click", () => {
  if (find) {
    alert("You already have joined!");
  } else {
    set();
  }
});

if (find) {
  Header.classList.add("hidden");
} else {
  Header.classList.remove("hidden");
}
