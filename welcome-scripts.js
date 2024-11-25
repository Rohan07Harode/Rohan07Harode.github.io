// List of banner images (Replace with your actual Adobe Stock image paths)
const banners = [
    'images/banner1.jpg', // Path to banner image 1
    'images/banner2.jpg', // Path to banner image 2
    'images/banner3.jpg'  // Path to banner image 3
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
