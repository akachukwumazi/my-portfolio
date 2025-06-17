const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");
const WhatsAppSendBtn = document.getElementById("WhatsAppSendBtn");
const cancelBtn = document.getElementById("cancelBtn");
// const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
    if(chatBox.style.display === "none") {
       chatBox.style.display = "flex" 
       sendBtn.style.display = "none"
    }else{
       chatBox.style.display = "" 
       sendBtn.style.display = ""
    }
});
cancelBtn.addEventListener("click", () => {
    if(sendBtn.style.display === "none") {
        sendBtn.style.display = "block" 
        chatBox.style.display = "none"
    }else{
        chatBox.style.display = "" 
        sendBtn.style.display = ""
    }
});

WhatsAppSendBtn.addEventListener("click", () => {
 const message = document.getElementById("messageBox").value
 const phone = "2348070870159"


 if(message.trim()){
     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");

 }else {
      alert("Please enter a message");
    }
 
});