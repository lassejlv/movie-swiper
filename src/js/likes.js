const LIST = document.getElementById("list");

const LOCAL_PREFIX = "movie-finder-";

// Ensure Auth
if (!localStorage.getItem(LOCAL_PREFIX + "token")) {
  window.location.href = "/";
}

// Get the users likes
const likes = JSON.parse(localStorage.getItem(`${LOCAL_PREFIX}returns`));

console.log(likes);

if (!likes) {
  console.log("Alle likes will appear here...");
}

likes.map((like) => {
  const ul = document.getElementById("ul");
  const li = document.createElement("li");

  li.setAttribute("id", like.ID);

  li.innerHTML = `${like.Title} - <button id="delete"><i class="fa-solid fa-trash-alt"></i></button>`;
  ul.appendChild(li);
});

const deleteBtn = document.getElementsByClassName("delete");

try {
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", (e) => {
      const id = e.target.parentElement.getAttribute("id");

      const items = JSON.parse(localStorage.getItem(`${LOCAL_PREFIX}returns`));

      for (let i = 0; i < items.length; i++) {
        if (items[i].id == id) {
          items.splice(i, 1);
        }
      }
      localStorage.setItem(`${LOCAL_PREFIX}returns`, JSON.stringify(items));
      e.target.parentElement.remove();
    }),
      (e) => {
        console.log(e);
      };
  }
} catch (error) {
  console.log(error);
}
