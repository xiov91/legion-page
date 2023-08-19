document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("profileModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("profileModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("profileModal")) {
        document.getElementById("profileModal").style.display = "none";
    }
});