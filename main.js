function randomStars(n) {
    let value = `${Math.floor(Math.random() * 2000 + 2)}px ${Math.floor(
        Math.random() * 2000 + 2
    )}px #FFF`;
    for (let i = 0; i < n; i = i + 2) {
        value = `${value} , ${Math.floor(Math.random() * 2000 + 2)}px ${Math.floor(
            Math.random() * 2000 + 2
        )}px #FFF`;
    }
    return value;
}

// Function to fade in hero section text
function fadeInText() {
    const heroText = document.getElementById('heroText');
    const textElements = heroText.querySelectorAll('h1, h2, h3, p');

    let opacity = 0;
    let index = 0;

    const intervalId = setInterval(function() {
        textElements[index].style.opacity = opacity;
        opacity += 0.01;

        if (opacity >= 1) {
            index++;
            opacity = 0;
        }

        if (index >= textElements.length) {
            clearInterval(intervalId);
        }
    }, 10); // Adjust the interval speed as needed
}

document.addEventListener("DOMContentLoaded", function() {
    fadeInText(); // Fade in hero section text on page load
    
    let stars1 = document.getElementById("stars-group1");
    let stars2 = document.getElementById("stars-group2");
    let stars3 = document.getElementById("stars-group3");
    
    stars1.style["boxShadow"] = randomStars(900);
    stars2.style["boxShadow"] = randomStars(300);
    stars3.style["boxShadow"] = randomStars(200);
});




  
  