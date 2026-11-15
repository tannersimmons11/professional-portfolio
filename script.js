function enlargePhoto() {
    var photo = document.querySelector(".social");

    if (photo.style.width === "70%") {
        photo.style.width = "35%";
    } else {
        photo.style.width = "70%";
    }
}