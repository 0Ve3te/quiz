class Manage {
    static randomQuestion() {
        const index = Math.floor(Math.random() * (quiz.allQuestions.length));
        return quiz.allQuestions[index]
    }

    static showQuestion() {
        const obj = this.randomQuestion();
        quiz.statistic.counter++;

        quiz.counterSpan.textContent = quiz.statistic.counter;
        quiz.questionText.textContent = obj.text;
        
        const parentAnswers = document.querySelector('div.game');
        const answer1 = document.createElement('div');
        const answer2 = document.createElement('div');
        const answer3 = document.createElement('div');
        const answer4 = document.createElement('div');
        
        answer1.classList.add('answer', 'a1');
        answer2.classList.add('answer', 'a2');
        answer3.classList.add('answer', 'a3');
        answer4.classList.add('answer', 'a4');

        parentAnswers.appendChild(answer1);
        parentAnswers.appendChild(answer2);
        parentAnswers.appendChild(answer3);
        parentAnswers.appendChild(answer4);

        document.querySelectorAll('.answer').forEach( (answer,index) => answer.textContent = obj.answerTab[index]);

        document.querySelectorAll('.answer').forEach(answer => answer.addEventListener('click', () => {
            this.checkAnswer(obj, answer);
        }));
        this.startClock();
    }

    static startClock() {
        let time = 5;

        quiz.clockId = setInterval(() => {
            if (time == 0) {
                quiz.statistic.changeStatistic('-');
                return this.endClock();
            }
            
           time--;
           quiz.clock.textContent = time; 
        }, 1000);
    }

    static endClock() {
        clearInterval(quiz.clockId);
        this.nextQuestion();
    }

    static findCorrectAnswer(obj) {
        document.querySelectorAll('.answer').forEach(item => {
           if(item.textContent == obj.answerTab[obj.getCorrectIndex()])
               this.correctAnswer(item);
        })
    }

      static checkAnswer(obj, clicked) {
        if (quiz.clock.textContent != 0) {

            if (clicked.textContent === obj.answerTab[obj.getCorrectIndex()]) {
                this.correctAnswer(clicked);
                quiz.statistic.changeStatistic('+');
                clearInterval(quiz.clockId);
                this.nextQuestion();
    
            } else {
                this.findCorrectAnswer(obj);
                this.incorrectAnswer(clicked);
                quiz.statistic.changeStatistic('-');
                clearInterval(quiz.clockId);
                this.nextQuestion();
            }
        } else {
            alert('Wybrałeś odpowiedź zbyt późno!');
        }
    }

    static correctAnswer(clicked) {
        clicked.style.boxShadow = "0 0px 24px rgb(76,187,23)";
        clicked.style.backgroundColor = "rgb(76,187,23)";
        clicked.style.color = 'white';
        clicked.style.fontWeight = 'bold';
    }

    static incorrectAnswer(clicked) {
        clicked.style.boxShadow = "0 0px 24px rgb(185,46,52)";
        clicked.style.backgroundColor = "rgb(185,46,52)";
        clicked.style.color = 'white';
        clicked.style.fontWeight = 'bold';
    }

    static clearPanel() {
        document.querySelector('.game').removeChild(document.querySelector('.a1'));
        document.querySelector('.game').removeChild(document.querySelector('.a2'));
        document.querySelector('.game').removeChild(document.querySelector('.a3'));
        document.querySelector('.game').removeChild(document.querySelector('.a4'));
    }

    static summary() {
        document.querySelector('.score span').textContent = quiz.statistic.correctA + '0 %';
        document.querySelector('.correctA span').textContent = quiz.statistic.correctA;
        document.querySelector('.incorrectA span').textContent = quiz.statistic.incorrectA;
        document.querySelector('.summary').style.display = 'flex';

        quiz.statistic.counter = 0;
        quiz.statistic.correctA = 0;
        quiz.statistic.incorrectA = 0;

        document.getElementById('start').style.display = 'flex';
        document.querySelector('div.game').style.display = 'none';
        document.querySelector('div.panel').style.height = '100%';
    }

    static nextQuestion() {
        if (quiz.statistic.counter == 10) {
            this.clearPanel();
            setTimeout(() => {
                return this.summary();
            }, 1500);
        }

        setTimeout(() => {
            this.clearPanel();
            this.showQuestion();
        }, 1500);
    }
}