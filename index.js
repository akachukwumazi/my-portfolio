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



const submitData = document.getElementById('formData');

submitData.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(submitData);
    const data = Object.fromEntries(formData);

 
    const phoneNumber = "2348070870159"; 


    const message = `Hello, I’m contacting you from your website.\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    submitData.reset();
});


