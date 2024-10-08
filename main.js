let open = document.querySelector('.bi-list');
let close = document.querySelector('.bi-x-lg');
let menu = document.querySelector('.navbar__menu');

open.addEventListener('click', () => {
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    menu.classList.toggle('hidden');
})

close.addEventListener('click', () => {
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    menu.classList.toggle('hidden');
})


function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var emailAddress = "yuki49563chan@gmail.com";
    var subject = "Message from Website";
    var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
    var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
}

const phrases = [
    "Certified TensorFlow Developer",
    "Data Science",
    "Data Analysis",
    "Machine Learning Engineer",
    "Developer",
    "Web Designer",
    "Freelancer"
];

let index = 0;

function displayWord() {
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.style.opacity = 0; // Fade out

    setTimeout(() => {
        wordDisplay.textContent = phrases[index]; // Change text
        wordDisplay.style.opacity = 1; // Fade in
        index = (index + 1) % phrases.length; // Move to next phrase
    }, 500); // Wait for fade out before changing text
}

setInterval(displayWord, 3000); // Change phrase every 2 seconds
displayWord(); // Initial call to display the first phrase