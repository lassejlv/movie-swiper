const App = document.getElementById("app");
const Logout = document.getElementById("movies-logout");

const LOCAL_PREFIX = "movie-finder-";

// Ensure Auth
if (!localStorage.getItem(LOCAL_PREFIX + "token")) {
  window.location.href = "/";
}

// Buttons ToolBar
const DELETE_BOX = document.getElementById("delete");
const LOVE_BOX = document.getElementById("love");
const RETRUN_BOX = document.getElementById("return");

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
const keys = ["5ad01f87", "4ce8bb43", "fef1099", "d99ca822"];
let key = keys[Math.floor(Math.random() * keys.length)];

fetch("/names.json")
  .then((res) => res.json())
  .then((data) => {
    const item = data[Math.floor(Math.random() * data.length)];

    console.log(key);

    console.log(item);

    fetch(url + `/?t=${item}&apikey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "False") {
          Image.src = "/assets/error.png";
          Title.innerText = data.Error;
          Description.innerText = "N/A";
        } else {
          Image.src = data.Poster || "/assets/error.png";
          Title.innerText = data.Title;
          Description.innerText = data.Plot;
        }

        console.log(data);

        RETRUN_BOX.addEventListener("click", () => {
          const item = {
            id: data.imdbID,
          };
          let items = [];
          if (localStorage.getItem(LOCAL_PREFIX + "returns") === null) {
            items.push(item);
            localStorage.setItem(
              LOCAL_PREFIX + "returns",
              JSON.stringify(items)
            );
          } else {
            items = JSON.parse(localStorage.getItem(LOCAL_PREFIX + "returns"));
            items.push(item);
            localStorage.setItem(
              LOCAL_PREFIX + "returns",
              JSON.stringify(items)
            );
          }

          window.location.reload();
        });

        LOVE_BOX.addEventListener("click", () => {
          const item = {
            id: data.imdbID,
          };
          let items = [];
          if (localStorage.getItem(LOCAL_PREFIX + "loves") === null) {
            items.push(item);
            localStorage.setItem(LOCAL_PREFIX + "loves", JSON.stringify(items));
          } else {
            items = JSON.parse(localStorage.getItem(LOCAL_PREFIX + "loves"));
            items.push(item);
            localStorage.setItem(LOCAL_PREFIX + "loves", JSON.stringify(items));
          }

          window.location.reload();
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });

// Delete
DELETE_BOX.addEventListener("click", () => window.location.reload());
