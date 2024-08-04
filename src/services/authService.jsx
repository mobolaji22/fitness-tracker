// src/services/authService.js
export function register(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
}

export function login(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify({ username }));
    return true;
  } else {
    return false;
  }
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
