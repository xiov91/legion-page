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

document.getElementById("openLiamBtn").addEventListener("click", function () {
    document.getElementById("liamModal").style.display = "block";
});

document.getElementById("openMontagBtn").addEventListener("click", function () {
    document.getElementById("montagModal").style.display = "block";
}); 

document.getElementById("openAhriBtn").addEventListener("click", function () {
    document.getElementById("ahriModal").style.display = "block";
});

document.getElementById("openDobBtn").addEventListener("click", function () {
    document.getElementById("dobModal").style.display = "block";
});

document.getElementById("openSorveaBtn").addEventListener("click", function () {
    document.getElementById("sorveaModal").style.display = "block";
});

document.getElementById("openRoarkBtn").addEventListener("click", function () {
    document.getElementById("roarkModal").style.display = "block";
});

document.getElementById("openTavinBtn").addEventListener("click", function () {
    document.getElementById("tavinModal").style.display = "block";
});

document.getElementById("openTogerBtn").addEventListener("click", function () {
    document.getElementById("togerModal").style.display = "block";
});

document.getElementById("closeLiamModal").addEventListener("click", function () {
    document.getElementById("liamModal").style.display = "none";
});

document.getElementById("closeMontagModal").addEventListener("click", function () {
    document.getElementById("montagModal").style.display = "none";
});

document.getElementById("closeAhriModal").addEventListener("click", function () {
    document.getElementById("ahriModal").style.display = "none";
});

document.getElementById("closeDobModal").addEventListener("click", function () {
    document.getElementById("dobModal").style.display = "none";
});

document.getElementById("closeSorveaModal").addEventListener("click", function () {
    document.getElementById("sorveaModal").style.display = "none";
});

document.getElementById("closeRoarkModal").addEventListener("click", function () {
    document.getElementById("roarkModal").style.display = "none";
});

document.getElementById("closeTavinModal").addEventListener("click", function () {
    document.getElementById("tavinModal").style.display = "none";
});

document.getElementById("closeTogerModal").addEventListener("click", function () {
    document.getElementById("togerModal").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("liamModal")) {
        document.getElementById("Modal").style.display = "none";
    }
    else if (event.target === document.getElementById("montagModal")) {
        document.getElementById("Modal").style.display = "none";
    }
    else if (event.target === document.getElementById("ahriModal")) {
        document.getElementById("Modal").style.display = "none";
    }
    else if (event.target === document.getElementById("dobModal")) {
        document.getElementById("Modal").style.display = "none";
    }
    else if (event.target === document.getElementById("sorveaModal")) {
        document.getElementById("Modal").style.display = "none";
    }
    else if (event.target === document.getElementById("roarkModal")) {
        document.getElementById("Modal").style.display = "none";
    }
    else if (event.target === document.getElementById("tavinModal")) {
        document.getElementById("Modal").style.display = "none";
    }
    else if (event.target === document.getElementById("togerModal")) {
        document.getElementById("Modal").style.display = "none";
    }
});