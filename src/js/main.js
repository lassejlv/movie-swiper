const getStarted = document.getElementById("movies-getStarted");

const LOCAL_PREFIX = "movie-finder-";
const RANDOM = Math.floor(Math.random() * 1000000);

getStarted.addEventListener("click", () => {
  const find = localStorage.getItem("token");

  function set() {
    localStorage.setItem("token", `${LOCAL_PREFIX}${RANDOM}`);
  }

  if (find) {
    alert("You already have joined!");
  } else {
    set();
  }
});
