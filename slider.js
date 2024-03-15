const sliderLine = document.querySelector('.slider-line');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');

class Slider {
    constructor() {
        this.offset = 0;
        this.sliderLine = sliderLine;

        sliderNext.addEventListener('click', () => this.next());
        sliderPrev.addEventListener('click', () => this.prev());
    }

    next() {
        this.offset = this.offset + 256;
        if (this.offset > 768) {
            this.offset = 0;
        }
        this.sliderLine.style.left = -this.offset + 'px';
    }

    prev() {
        this.offset = this.offset - 256;
        if (this.offset < 0) {
            this.offset = 768;
        }
        this.sliderLine.style.left = -this.offset + 'px';
    }
}

const slider = new Slider();