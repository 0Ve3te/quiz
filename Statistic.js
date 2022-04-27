class Statistic {
    constructor() {
        this.counter = 0;
        this.correctA = 0;
        this.incorrectA = 0;
    }

    changeStatistic(value) {
        if (value == '+') {
            // alert("Odpowiedź poprawna!");
            this.correctA++;
        } else {
            // alert("Odpowiedź niepoprawna!");
            this.incorrectA++;
        }
    }
}