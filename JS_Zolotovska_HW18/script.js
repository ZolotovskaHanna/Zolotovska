class CountdownTimer {
    constructor(elementSelector, totalSeconds) {
        this.timerElement = document.querySelector(elementSelector);
        this.totalSeconds = totalSeconds;
        this.remainingSeconds = totalSeconds;
        this.interval = null;
    }
    start() {
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateDisplay();

            if (this.remainingSeconds <= 0) {
                this.stop();
            }
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
        this.remainingSeconds = this.totalSeconds;
        this.updateDisplay();
    }
    updateDisplay() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        this.timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

const timer = new CountdownTimer('.timer', 85);
timer.start();