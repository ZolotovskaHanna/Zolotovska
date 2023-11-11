document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.js--slider__list');
    const slides = slider.querySelectorAll('li');
    const prevButton = document.querySelector('.js--slider__prev');
    const nextButton = document.querySelector('.js--slider__next');
    const dots = document.querySelectorAll('.js--dot');

    let currentSlide = 0;

    function updateSlider() {
        slides.forEach(function(slide, index) {
            slide.classList.toggle('current', index === currentSlide);
        });
        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === (currentSlide % dots.length));
        });

        prevButton.style.display = currentSlide === 0 ? 'none' : 'flex';
        nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'flex';
    }

    prevButton.addEventListener('click', function() {
        if (currentSlide > 0) {
            currentSlide -= 1;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentSlide < slides.length - 1) {
            currentSlide += 1;
            updateSlider();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index * Math.ceil(slides.length / dots.length);
            updateSlider();
        });
    });
    updateSlider();
});
