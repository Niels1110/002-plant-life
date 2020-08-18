const pictureArea = document.querySelector(".pictures-wrapper");
const pictures = pictureArea.querySelectorAll("img");

let currentPic = 0;
let z = 1;

pictureArea.addEventListener("click", function () {
  // 1. Add 1 to the variables
  currentPic = currentPic + 1;
  z = z + 1;

  // 2. Check if the currentPic value exceeds
  // the amount of pictures. If true, set
  // currentPic to 0
  if (currentPic > pictures.length - 1) {
    currentPic = 0;
  }

  // 3. Remove the animation for every picture -
  // we'll add the animation in the final step
  pictures.forEach((image) => {
    // Set animation to a blank
    image.style.animation = "";
  });

  // Go through the list of pictures, set the
  // picture who's location in the array is
  // equal to currentPic value to z
  pictures[currentPic].style.zIndex = z;

  // Add a face animation to the picture
  // with the currentPic location
  pictures[currentPic].style.animation = "fade .5s";
});

// Mouse over
pictureArea.addEventListener("mouseenter", function () {
  pictures.forEach((picture) => {
    // For each picture, the constant
    // is going to be different and it's
    // only used inside of this function
    const x = 25 * Math.floor(Math.random() * 5) - 75;
    const y = 25 * Math.floor(Math.random() * 5) - 75;

    // Use template literals with backticks ``
    // and the ${...} for where you insert the
    // variable data
    picture.style.transform = `translate(${x}px, ${y}px)`;
    console.log("worked?");
  });
});

pictureArea.addEventListener("mouseout", function () {
  pictures.forEach((picture) => {
    picture.style.transform = "";
  });
});
