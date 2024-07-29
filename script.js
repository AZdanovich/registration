let users = [];

document.getElementById("register-btn").addEventListener("click", () => {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
});

document.getElementById("login-btn").addEventListener("click", () => {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
});

document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const existingUser = users.find(
    (user) => user.username === username || user.email === email
  );
  if (existingUser) {
    document.getElementById("register-message").innerText =
      "Пользователь с таким именем или электронной почтой уже существует.";
  } else {
    users.push({ username, email });
    document.getElementById("register-message").innerText =
      "Вы успешно зарегистрированы";
  }
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const email = document.getElementById("login-email").value;
  const user = users.find(
    (user) => user.username === username && user.email === email
  );

  if (user) {
    document.getElementById("login-message").innerText = "Авторизация успешна!";
  } else {
    document.getElementById("login-message").innerText =
      "Пользователь не найден!";
  }
  document.getElementById("login-username").value = "";
  document.getElementById("login-email").value = "";
});
