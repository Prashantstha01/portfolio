// Form Logic
const myForm = document.getElementById('contactForm');
const statusMsg = document.getElementById('msgStatus');

myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // It Stop page from refreshing
    
    // Get values
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    
    //  Email Check
    if (email.includes("@") && email.includes(".")) {
        statusMsg.innerText = "Thanks " + name + ", message sent!";
        statusMsg.style.color = "#818CF8";
        myForm.reset(); // Clear form
    } else {
        statusMsg.innerText = "Error: Please check your email.";
        statusMsg.style.color = "#FF4B2B";
    }
});
