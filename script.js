// Register User
function registerUser() {
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Store user data in localStorage
    let user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
}

// Login User
function loginUser() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found! Please sign up.");
        return;
    }

    if (username === storedUser.username && password === storedUser.password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
}

// Check if logged in
if (window.location.pathname.includes("index.html")) {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
        window.location.href = "login.html";
    }
}
