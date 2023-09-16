function toggleMenu(){
    const menu=document.querySelector(".hamburger-menu-link");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// preloader setting--------------------------------------

// Wait for the website to load
window.addEventListener('load', () => {
    // Simulate a delay (in milliseconds) before hiding the preloader and showing content
    const delayDuration = 1500; // 2 seconds (you can adjust this value)

    setTimeout(() => {
        // Remove the preloader
        const preloader = document.querySelector('.preloader');
        preloader.style.display = 'none';

        // Show the content
        const content = document.querySelector('.content');
        content.style.display = 'block';

        // Enable scrolling
        document.body.style.overflow = 'auto';
    }, delayDuration);
});

