//Fade in and out elements when they are in the viewport
//Primary scss for .fade
//  .fade {
//      opacity: 0;
//      transition: opacity 2s ease -in -out;
//   }

//   .fade.visible {
//       opacity: 1;
//   }

//    .fade.hidden {
//       opacity: 0;
//   }

export function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) && 
            rect.bottom > 0
        );
    }

    function onScroll() {
        fadeInElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible'); 
                el.classList.remove('hidden'); 
            } else {
                el.classList.remove('visible'); 
                el.classList.add('hidden'); 
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); 
}

// Rotate elements like you flip a card
// Primary scss for .rotate
//    .rotate {
//        perspective: 1000px;
//        transition: transform 0.6s ease- out;
//        transform: rotateY(90deg);
//        opacity: 0;
//    }

//    .rotate.rotated {
//        transform: rotateY(0deg);
//        opacity: 1;
//        transition: transform 1.5s ease - out, opacity 0.3s ease - out;
//    }
export function rotateOnScroll() {
    const fadeInElements = document.querySelectorAll('.rotate');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    function onScroll() {
        fadeInElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('rotated');
                
            } else {
                el.classList.remove('rotated');
                
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
}

