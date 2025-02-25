let progress = 0;
function fillprogress() {
    if (progress < 100) {
        progress += 10; // Increase progress by 10%
        document.getElementById("progress-bar").style.width = progress + "%";

        if (progress === 100) {
            document.getElementById("popup").style.display = "block"; // Show popup at 100%
        }
    }
}
function showcomp1() {
    let img = document.getElementById("comp1");
    if (img.style.display === "none" || img.style.display === "") {
        img.style.display = "block"; // Show image
    } else {
        img.style.display = "none"; // Hide image
    }
}
