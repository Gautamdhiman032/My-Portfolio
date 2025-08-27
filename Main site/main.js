//----NAVIAGATION BAR ANIMATION-----
document.addEventListener("DOMContentLoaded", function () {
  // Navbar animation
  const navbar = document.querySelector('.navbar-section');
  // Text and image animation
  const left = document.querySelector('.animate-left');
  const right = document.querySelector('.animate-right');


  navbar.classList.add('navbar-slide-in');
  left.classList.add('active');
  right.classList.add('active');
});


//----Animation---about-Section---------
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => observer.observe(el));
});


//----CONTACT FORM SUBMITION FUNCTION....-------------

const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default submit
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.reset(); // clears the form
      alert("Thanks! Your message has been sent.");
    } else {
      alert("Oops! There was a problem.");
    }
  });
});


