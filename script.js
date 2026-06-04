// Function to handle Contact Slider
function toggleContact() {
    const slider = document.getElementById('contact-slider');
    slider.classList.toggle('active');
}

// Function to handle Resume (New Tab + Auto Download)
function handleResume() {
    const resumeUrl = 'assets/my-resume.pdf'; 
    window.open(resumeUrl, '_blank');
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muhammad_Umair_Habib_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Dynamic Typing Effect
const textElement = document.getElementById("typing-text");
const professions = ["Data Scientist.", "Cloud Specialist.", "Web Developer."];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
        textElement.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; 
    } else {
        textElement.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150; 
    }

    if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});