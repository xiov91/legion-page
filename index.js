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

document.getElementById("openSandyBtn").addEventListener("click", function () {
    document.getElementById("sandyModal").style.display = "block";
});

document.getElementById("openKoroghtBtn").addEventListener("click", function () {
    document.getElementById("koroghtModal").style.display = "block";
});

document.getElementById("openAprioBtn").addEventListener("click", function () {
    document.getElementById("aprioModal").style.display = "block";
});

document.getElementById("openRhotBtn").addEventListener("click", function () {
    document.getElementById("rhotModal").style.display = "block";
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

document.getElementById("closeSandyModal").addEventListener("click", function () {
    document.getElementById("sandyModal").style.display = "none";

});

document.getElementById("closeKoroghtModal").addEventListener("click", function () {
    document.getElementById("koroghtModal").style.display = "none";

});

document.getElementById("closeAprioModal").addEventListener("click", function () {
    document.getElementById("aprioModal").style.display = "none";

});

document.getElementById("closeRhotModal").addEventListener("click", function () {
    document.getElementById("rhotModal").style.display = "none";

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
    else if (event.target === document.getElementById("sandyModal")) {
        document.getElementById("sandyModal").style.display = "none";
    }
    else if (event.target === document.getElementById("koroghtModal")) {
        document.getElementById("koroghtModal").style.display = "none";
    }
    else if (event.target === document.getElementById("aprioModal")) {
        document.getElementById("aprioModal").style.display = "none";
    }
    else if (event.target === document.getElementById("rhotModal")) {
        document.getElementById("rhotModal").style.display = "none";
    }
});
