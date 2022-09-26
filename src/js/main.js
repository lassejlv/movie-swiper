const GetStarted = document.getElementById("movies-getStarted");
const Logout = document.getElementById("movies-logout");
const Header = document.getElementById("header");
const Main = document.getElementById("main");

const LOCAL_PREFIX = "movie-finder-";
const RANDOM = Math.floor(Math.random() * 1000000000);

const findToken = localStorage.getItem(`${LOCAL_PREFIX}token`);

function set(name, value) {
  localStorage.setItem(`${LOCAL_PREFIX}${name}`, value);
}

function del(name) {
  localStorage.removeItem(`${LOCAL_PREFIX}${name}`);
}

// Start the token process
GetStarted.addEventListener("click", () => {
  if (findToken) {
    alert("You already have joined!");
  } else {
    const name = prompt("What is your name?");

    if (!name) {
      set("name", `user-${RANDOM}`);
    } else {
      set("name", name);
    }

    set("token", RANDOM);

    set("createdAt", new Date().toISOString().split("T")[0]);

    window.location.reload();
  }
});

// Delete the users token
Logout.addEventListener("click", () => {
  del("token");
  del("name");
  del("createdAt");
  window.location.reload();
});

// The users has a token
if (findToken) {
  Header.remove();
} else {
  Main.remove();
}
