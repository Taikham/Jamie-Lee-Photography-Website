// Intersection Observer for triggering animation on scroll
const sections = document.querySelectorAll('.section');

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Get the modal
var modal = document.getElementById("imagePopup");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".image-card img");
var modalImg = document.getElementById("popup-img");
var captionText = document.getElementById("caption");

images.forEach(image => {
    image.addEventListener("click", function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
