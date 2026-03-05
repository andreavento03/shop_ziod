// ===== Sticky Header on Scroll =====
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ===== Gallery & Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const gallery = document.getElementById('gallery');

// Array of clothing images from the clothes folder
// Manually list images here as you add them to the clothes/ folder
const clothesImages = [
    // Example: 'clothes/image1.jpg',
    // Example: 'clothes/image2.jpg',
];

// Render gallery items
function renderGallery() {
    // If no images, show placeholder (it's already in HTML)
    if (clothesImages.length === 0) {
        return;
    }

    // Clear placeholder if there are images
    gallery.innerHTML = '';

    clothesImages.forEach((imagePath) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Capo della collezione';

        item.appendChild(img);
        item.addEventListener('click', () => {
            openLightbox(imagePath);
        });

        gallery.appendChild(item);
    });
}

// Open lightbox
function openLightbox(imagePath) {
    lightboxImg.src = imagePath;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close on button click
lightboxClose.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Initialize gallery
renderGallery();

// ===== Navigation Smooth Scroll =====
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    });
});

console.log('✓ Ziod website loaded');
