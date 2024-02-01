// script.js

document.addEventListener('DOMContentLoaded', function () {
    createHearts();
    setupNoButtonMovement();
});

function createHearts() {
    const numHearts = 50; // Adjust the number of hearts
    const container = document.querySelector('.heart-container');

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("img");
        heart.className = "heart";
        heart.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000'%3E%3Cpath d='M12 21.35l-1.45-1.32C6.14 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-4.14 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        container.appendChild(heart);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createSmileFaces();
});

function createSmileFaces() {
    const numSmileFaces = 50; // Adjust the number of smile faces
    const smileContainer = document.querySelector('.smile-container');

    for (let i = 0; i < numSmileFaces; i++) {
        const smile = document.createElement('div');
        smile.className = 'smile';
        smile.innerHTML = '🤣'; // Use emoji character directly in the HTML
        smile.style.left = Math.random() * 100 + 'vw';
        smile.style.animationDuration = Math.random() * 4 + 1 + 's';
        smileContainer.appendChild(smile);
    }
}



















