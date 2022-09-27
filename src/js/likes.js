const LIST = document.getElementById("list");

const LOCAL_PREFIX = "movie-finder-";

// Ensure Auth
if (!localStorage.getItem(LOCAL_PREFIX + "token")) {
  window.location.href = "/";
}

// API information
const url = "https://www.omdbapi.com";
const keys = ["5ad01f87", "4ce8bb43", "fef1099", "d99ca822"];
let key = keys[Math.floor(Math.random() * keys.length)];

// Get the users likes
const likes = JSON.parse(localStorage.getItem(`${LOCAL_PREFIX}returns`));

likes.map((like) => {
  fetch(url + `/?i=${like.id}&apikey=${key}`)
    .then((res) => res.json())
    .then((data) => {
      const ul = document.getElementById("ul");
      const li = document.createElement("li");

      li.innerText = `${data.Title}`;
      ul.appendChild(li);
    })
    .catch((err) => {
      console.error(err.message);
    });
});
