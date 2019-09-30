class GuessingGame {
    constructor() {
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {

        const resNumber = Math.ceil((this.max + this.min) / 2);
        
        return resNumber;
    }

    lower() {

        this.max = Math.ceil((this.max + this.min) / 2);
    }

    greater() {

        this.min = Math.ceil((this.max + this.min) / 2);
    }
}

module.exports = GuessingGame;