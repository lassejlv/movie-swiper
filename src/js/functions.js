function set(name, value) {
  localStorage.setItem(`${LOCAL_PREFIX}${name}`, value);
}

function del(name) {
  localStorage.removeItem(`${LOCAL_PREFIX}${name}`);
}

function get(name) {
  localStorage.getItem(`${LOCAL_PREFIX}${name}`);
}
