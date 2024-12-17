// List of image paths (Replace with your own images)
const photoPaths = [
    'itachi.jpeg', 'hulk.jpeg', 'thor.jpeg', 'wanda.jpeg', 'doctor.jpeg',
    'ironman.jpeg', 'spiderman.jpeg', 'mj.jpeg', 'superman.jpeg', 'Captain America.jpeg'
];

// Get references to the gallery container and overlay elements
const galleryContainer = document.getElementById('gallery-container');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const closeButton = document.getElementById('close-button');

// Create image elements for the gallery
photoPaths.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'Gallery Image';
    img.addEventListener('click', () => {
        overlayImage.src = photo; // Set overlay image source
        overlay.classList.remove('hidden'); // Show overlay
    });
    galleryContainer.appendChild(img);
});

// Close overlay when close button is clicked
closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden'); // Hide overlay
});

// Close overlay when clicking outside the image
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.classList.add('hidden');
    }
});
