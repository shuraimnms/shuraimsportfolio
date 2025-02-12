const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});

// Apply stored mode on load
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
}
