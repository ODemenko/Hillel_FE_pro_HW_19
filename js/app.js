window.onload = function() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const imagePath = `images/${randomNumber}.jpg`;
    const imageElement = document.getElementById('randomImage');
    imageElement.src = imagePath;
};