const LIST = document.getElementById("list");

const LOCAL_PREFIX = "movie-finder-";

// Ensure Auth
if (!localStorage.getItem(LOCAL_PREFIX + "token")) {
  window.location.href = "/";
}

// Get the users likes
const likes = JSON.parse(localStorage.getItem(`${LOCAL_PREFIX}returns`));

likes.map((like) => {
  const ul = document.getElementById("ul");
  const li = document.createElement("li");

  li.innerText = `${like.Title}`;
  ul.appendChild(li);
});
