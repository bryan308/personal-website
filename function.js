let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.transform = 'translateY(0)';
    navbar.style.transition = 'transform 0.3s ease-in';
  } else {
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 0.3s ease-out';
  }
  prevScrollpos = currentScrollPos;
});

const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar-item a');

navbarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = navbar.offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;
    const duration = 1000;
    const delay = 100;
    setTimeout(() => {
      window.scroll({
        top: targetPosition,
        left: 0,
        behavior: 'smooth',
        duration: duration
      });
    }, delay);
  });
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY - 10 + "px";
  cursor.style.left = e.pageX - 10 + "px";
});

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});