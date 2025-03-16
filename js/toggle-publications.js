function toggleYear(year) {
    var content = document.getElementById('year-' + year);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}