const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 351;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);

var navLinks = document.querySelectorAll("nav a");

// Loop through each link and add a click event listener
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the section that corresponds to the clicked link
    var sectionId = this.getAttribute("href");
    var section = document.querySelector(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  });
});

const nav = document.querySelector('.nav');
let previousScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    // Scrolling down
    nav.style.transform = 'translateY(-100%)';
    nav.style.transition = 'transform 0.3s ease-out';
  } else {
    // Scrolling up
    nav.style.transform = 'translateY(0)';
    nav.style.transition = 'transform 0.3s ease-in';
  }

  previousScroll = currentScroll;
});

function sendMessage() {
  // Create the alert box
  var alertBox = document.createElement("div");
  alertBox.className = "alert";

  // Add a message
  var message = document.createTextNode("This button is not yet functional. Sorry for the inconvenience.");
  alertBox.appendChild(message);

  // Add a close button
  var closeButton = document.createElement("span");
  closeButton.className = "closebtn";
  closeButton.innerHTML = "&times;";
  alertBox.appendChild(closeButton);

  // Add the alert box to the page
  document.body.appendChild(alertBox);

  // Set the opacity of the alert box to 1 to trigger the fade-in animation
  alertBox.style.opacity = "1";

  // Close the alert box when the close button is clicked
  closeButton.onclick = function() {
    alertBox.style.display = "none";
  }
}
