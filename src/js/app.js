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
