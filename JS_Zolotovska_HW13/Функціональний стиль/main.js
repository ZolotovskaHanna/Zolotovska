function slider(prevButton, nextButton, listElement, dotsContainer) {
    let currentSlideIndex = 0;
    const slides = Array.from(listElement.children);
    const dots = Array.from(dotsContainer.children);
    const ACTIVE_CLASS = 'current';
    const ACTIVE_DOT_CLASS = 'active';

    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle(ACTIVE_CLASS, index === currentSlideIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle(ACTIVE_DOT_CLASS, index === currentSlideIndex % dots.length);
        });
        prevButton.style.display = currentSlideIndex === 0 ? 'none' : 'flex';
        nextButton.style.display = currentSlideIndex === slides.length - 1 ? 'none' : 'flex';
    };
    prevButton.addEventListener('click', () => {
        currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : slides.length - 1;
        updateSlider();
    });
    nextButton.addEventListener('click', () => {
        currentSlideIndex = currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0;
        updateSlider();
    });
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlideIndex = index * Math.ceil(slides.length / dots.length);
            updateSlider();
        });
    });
    updateSlider();
}
document.addEventListener('DOMContentLoaded', () => {
    slider(
        document.querySelector('.js--slider__prev'),
        document.querySelector('.js--slider__next'),
        document.querySelector('.js--slider__list'),
        document.querySelector('.js--dots')
    );
});






