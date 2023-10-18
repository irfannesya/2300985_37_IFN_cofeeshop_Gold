
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById("loginStatus").textContent = "Login berhasil";
    } else {
        document.getElementById("loginStatus").textContent = "Login gagal. Mohon cek E-mail dan Password anda.";
    }
}

document.getElementById("loginForm").addEventListener("submit", login);

module.exports = loginControler