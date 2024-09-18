export function fadeInOnScroll() {
    const fadeInElement = document.querySelector('.about-us img.fade');
   

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(fadeInElement)) {
            fadeInElement.classList.add('visible');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); 
}

