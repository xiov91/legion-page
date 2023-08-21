// Open Buttons

document.getElementById("openMakBtn").addEventListener("click", function () {
    document.getElementById("makModal").style.display = "block";
});

document.getElementById("openLuriBtn").addEventListener("click", function () {
    document.getElementById("luriModal").style.display = "block";
});

document.getElementById("openMartinBtn").addEventListener("click", function () {
    document.getElementById("martinModal").style.display = "block";
});

// Close Buttons

document.getElementById("closeMakModal").addEventListener("click", function () {
    document.getElementById("makModal").style.display = "none";
});

document.getElementById("closeLuriModal").addEventListener("click", function () {
    document.getElementById("luriModal").style.display = "none";
});

document.getElementById("closeMartinModal").addEventListener("click", function () {
    document.getElementById("martinModal").style.display = "none";

});

// Displaying it all

window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("makModal")) {
        document.getElementById("makModal").style.display = "none";
    }
    else if (event.target === document.getElementById("luriModal")) {
        document.getElementById("luriModal").style.display = "none";
    }
    else if (event.target === document.getElementById("martinModal")) {
        document.getElementById("martinModal").style.display = "none";
    }
});
