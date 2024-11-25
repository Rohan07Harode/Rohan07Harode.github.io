// List of banner images (Replace with your actual Adobe Stock image paths)
const banners = [
    'images/AdobeStock_165569117.jpeg', // Path to banner image 1
    'images/AdobeStock_330412807.jpeg', // Path to banner image 2
    'images/AdobeStock_306891269.jpeg'  // Path to banner image 3
];

document.addEventListener('DOMContentLoaded', () => {
    const bannerContainer = document.getElementById('banner-container');

    // Dynamically load banners into the container
    banners.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Banner ${index + 1}`;
        if (index === 0) img.classList.add('active'); // Set first banner as active
        bannerContainer.appendChild(img);
    });

    // Banner rotation logic
    let currentIndex = 0;
    setInterval(() => {
        const images = bannerContainer.querySelectorAll('img');
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 5000); // Rotate banners every 5 seconds
});
