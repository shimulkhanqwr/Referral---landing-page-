document.addEventListener("DOMContentLoaded", function () {
    // Add copy-to-clipboard functionality
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent link navigation
            const link = this.getAttribute("href");

            // Copy to clipboard
            navigator.clipboard.writeText(link).then(() => {
                alert("Referral link copied: " + link);
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });
    });

    // Dark mode toggle
    const toggleTheme = document.createElement("button");
    toggleTheme.textContent = "Toggle Dark Mode";
    toggleTheme.classList.add("theme-toggle");
    document.body.appendChild(toggleTheme);

    toggleTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
