document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.hash = this.getAttribute("href");
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});



const formData = document.getElementById('formData');
formData.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    
    signupForm.reset();
});


