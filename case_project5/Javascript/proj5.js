//proj5.js

// 1. Creating an overlay feature when an image is clicked

document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("clickableImage");
    const dynamicImageContainer = document.getElementById("dynamicImageContainer");

    // Create overlay elements dynamically
    const overlay = document.createElement("div");
    overlay.id = "imageOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Dims the background
    overlay.style.display = "none";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";
    document.body.appendChild(overlay);

    //3. Use examples related to "nodes" including createElement and appendChild. 
    // Create an image inside the overlay
    const overlayImage = document.createElement("img");
    overlayImage.style.maxWidth = "90%";
    overlayImage.style.maxHeight = "90%";
    overlay.appendChild(overlayImage);

    // Show overlay when image is clicked
    image.addEventListener("click", function () {
        overlay.style.display = "flex";
        overlayImage.src = "images/hello1.jpeg"; // Replace with the alternative image

        // Check if the dynamic image already exists, if not, add it
        if (!document.getElementById("dynamicImage")) {
            const newImage = document.createElement("img");
            newImage.src = "images/hello1.jpeg"; // Replace with an actual image path
            newImage.alt = "Dynamically added image";
            newImage.id = "dynamicImage";
            newImage.style.width = "200px";
            newImage.style.height = "auto";
            dynamicImageContainer.appendChild(newImage);
        }
    });

    // Hide overlay and remove dynamic image when clicked
    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        const dynamicImage = document.getElementById("dynamicImage");
        if (dynamicImage) {
            dynamicImage.remove();
        }
    });
});
