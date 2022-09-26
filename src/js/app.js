const App = document.getElementById("app");
const Logout = document.getElementById("movies-logout");

const LOCAL_PREFIX = "movie-finder-";

// Ensure Auth
if (!localStorage.getItem(LOCAL_PREFIX + "token")) {
  window.location.href = "/";
}

// Delete the users token
Logout.addEventListener("click", () => {
  del("token");
  del("name");
  del("createdAt");
  window.location.reload();
});

// Fetch Movies
const Image = document.getElementById("movies-random-img");
const Title = document.getElementById("movies-random-title");
const Description = document.getElementById("movies-random-description");

const url = "https://www.omdbapi.com";
const key = "5ad01f87";

fetch("/names.json")
  .then((res) => res.json())
  .then((data) => {
    const item = data[Math.floor(Math.random() * data.length)];

    fetch(url + `/?t=${item}&y=2020&apikey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        Image.src = data.Poster;
        Title.innerText = data.Title;
        Description.innerText = data.Plot;
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });
