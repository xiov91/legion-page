// Assuming you have multiple buttons with class "btn-5" or "btn-87"
const buttons = document.querySelectorAll(".btn-5, .btn-87");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        // Hide buttons when a modal pops up
        buttons.forEach(btn => {
            btn.style.display = "none";
        });

        // Show the respective modal
        // ... your modal logic here ...
    });
});

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", function () {
        // Show buttons when a modal is closed
        buttons.forEach(btn => {
            btn.style.display = "block";
        });

        // Close the modal
        // ... your modal close logic here ...
    });
});

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

document.getElementById("openMyraBtn").addEventListener("click", function () {
    document.getElementById("myraModal").style.display = "block";
});

document.getElementById("openSindriBtn").addEventListener("click", function () {
    document.getElementById("sindriModal").style.display = "block";
});

document.getElementById("openJayBtn").addEventListener("click", function () {
    document.getElementById("jayModal").style.display = "block";
});

document.getElementById("openLynBtn").addEventListener("click", function () {
    document.getElementById("lynModal").style.display = "block";
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

document.getElementById("closeMyraModal").addEventListener("click", function () {
    document.getElementById("myraModal").style.display = "none";

});

document.getElementById("closeSindriModal").addEventListener("click", function () {
    document.getElementById("sindriModal").style.display = "none";

});

document.getElementById("closeJayModal").addEventListener("click", function () {
    document.getElementById("jayModal").style.display = "none";

});

document.getElementById("closeLynModal").addEventListener("click", function () {
    document.getElementById("lynModal").style.display = "none";

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
    else if (event.target === document.getElementById("myraModal")) {
        document.getElementById("myraModal").style.display = "none";
    }
    else if (event.target === document.getElementById("sindriModal")) {
        document.getElementById("sindriModal").style.display = "none";
    }
    else if (event.target === document.getElementById("jayModal")) {
        document.getElementById("jayModal").style.display = "none";
    }
    else if (event.target === document.getElementById("lynModal")) {
        document.getElementById("lynModal").style.display = "none";
    }
});

