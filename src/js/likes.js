const LIST = document.getElementById("list");

const LOCAL_PREFIX = "movie-finder-";

// Ensure Auth
if (!localStorage.getItem(LOCAL_PREFIX + "token")) {
  window.location.href = "/";
}

// Get the users likes
const likes = JSON.parse(localStorage.getItem(`${LOCAL_PREFIX}returns`));

console.log(likes);
