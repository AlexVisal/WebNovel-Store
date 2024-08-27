// Select all image elements in the slider
const imgs = document.querySelectorAll('.slider img');
// Select all dot elements
const dots = document.querySelectorAll('.dot');
// Initialize the index of the current image
let currentImg = 0; // index of the first image 
// Set the interval for changing slides (in milliseconds)
const interval = 3000; // duration(speed) of the slide

// Function to change the current slide
function changeSlide(n) {
    // Loop through all images and dots to reset their states
    for (let i = 0; i < imgs.length; i++) { // reset
      // Hide all images
      imgs[i].style.opacity = 0;
      // Remove 'active' class from all dots
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    // Move to the next image, wrapping around if at the end
    currentImg = (currentImg + 1) % imgs.length; // update the index number

    // If a specific slide number is provided
    if (n != undefined) {
        // Clear the existing timer
        clearInterval(timer);
        // Start a new timer
        timer = setInterval(changeSlide, interval);
        // Set the current image to the provided index
        currentImg = n;
    }
  
    // Show the current image
    imgs[currentImg].style.opacity = 1;
    // Add 'active' class to the corresponding dot
    dots[currentImg].className += ' active';
}

// Start the automatic slideshow
let timer = setInterval(changeSlide, interval);