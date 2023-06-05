// Function to get element by its ID
var getElementById = function (id) {
    return document.getElementById(id);
};

// Array to store image objects
var imageMem = [];

// Function to cycle through images in specified element
function cycleImages(imageArray, elementId) {
    var i = 0;
    var el = getElementById(elementId);

    // Function to toggle images at a regular interval
    function toggleImages() {
        el.src = imageArray[i];
        i = (i + 1) % imageArray.length;
    }

    // Set interval to call toggleImages function every 3 seconds
    setInterval(toggleImages, 3000);
}

// Function to preload images into memory
function preloadImages(imageArray, index) {
    // Default index value if not provided
    index = index || 0;

    if (imageArray && imageArray.length > index) {
        var img = new Image();
        img.src = imageArray[index];

        img.onload = function () {
            //  call preloadImages to load next image
            preloadImages(imageArray, index + 1);
        }

        // Store the image object in the imageMem array to keep it in memory
        imageMem.push(img);
    }
}

// Function to enlarge image
function enlarge(img) {
    img.style.height = "400px";
    img.style.width = "auto";
    img.parentElement.parentElement.style.zIndex = "5";
    img.style.position = "fixed";
}


// Function to reduce image size
function reduce(img) {
    img.style.height = "auto";
    img.style.width = "180px";
    img.parentElement.parentElement.style.zIndex = "-1";
    img.style.position = "";
}