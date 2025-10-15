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
    // console.log(data);
    
    alert(data);
    submitData.reset();
});


