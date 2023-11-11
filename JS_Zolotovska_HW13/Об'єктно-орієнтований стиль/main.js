class Slider {
    constructor(sliderSelector, prevSelector, nextSelector, dotSelector) {
        this.sliderElement = document.querySelector(sliderSelector);
        this.prevButton = document.querySelector(prevSelector);
        this.nextButton = document.querySelector(nextSelector);
        this.dots = document.querySelectorAll(dotSelector);
        this.currentSlide = 0;

        this.slides = Array.from(this.sliderElement.children);
        this.totalSlides = this.slides.length;

        this.init();
    }

    init() {
        this.showSlide(this.currentSlide);
        this.prevButton.addEventListener('click', this.showPrevSlide.bind(this));
        this.nextButton.addEventListener('click', this.showNextSlide.bind(this));
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }

    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('current'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.slides[index].classList.add('current');
        this.dots[index].classList.add('active');

        this.prevButton.style.display = index === 0 ? 'none' : 'flex';
        this.nextButton.style.display = index === this.slides.length - 1 ? 'none' : 'flex';
    }

    showPrevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.showSlide(this.currentSlide);
        }
    }

    showNextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.showSlide(this.currentSlide);
        }
    }

    goToSlide(index) {
        const newSlideIndex = index * Math.floor(this.totalSlides / this.dots.length);
        this.currentSlide = newSlideIndex < this.totalSlides ? newSlideIndex : 0;
        this.showSlide(this.currentSlide);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Slider('.js--slider__list', '.js--slider__prev', '.js--slider__next', '.js--dot');
});


