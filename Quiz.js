class Quiz {
    constructor() {
        this.allQuestions = [];
        this.createQuestions();
        this.statistic = new Statistic();

        //widok
        this.counterSpan = document.querySelector('.counter span');
        this.questionText = document.querySelector('.question');
        this.answers = [...document.querySelectorAll('.answer')];
        this.clock = document.querySelector('div.time span');
        this.clockId = null;
    }

    addQuestion(obj) {
        if(typeof obj != 'object')
            return console.error('Niepoprawny typ danych w dodawanym pytaniu!');

        this.allQuestions.push(obj);
    }

    createQuestions() {
        const q1 = new Question('Kto był prezydentem Polski?', ['Andrzej Dupa', 'Andrzej Duda', 'Lech Małęsa', 'Arek Kowalewski'], 1);
        const q2 = new Question('Do czego służyło Rzymskie Koloseum?', ['Do urządzania pojedynków gladiatorów', 'Do tańca', 'Do oglądania filmów', 'Do pokazów kulinarnych'], 0);
        const q3 = new Question('Co oznacza skrót ONZ?', ['Odnowa Nowoego Zjazdu', 'Ormiański Narodowy Zespół', 'Organizacja Narodowych Zespołów', 'Organizacja Narodów Zjednoczonych'], 3);
        const q4 = new Question('Kto jest autorem słów do polskiego hymnu?', ['Józef Wybicki', 'Madonna', 'Lech Małęsa', 'Marszałek Piłsudski'], 0);
        const q5 = new Question('Gdzie urodził się Fryderyk Chopin?', ['W Częstochowie', 'W USA', 'W Żelazowej Woli', 'We Francji'], 2);
        const q6 = new Question('Jak nazywa się reprezentacyjny pałac królów Francji?', ['Wersal', 'Wieża Eiffla', 'Luwr', 'Akwedukt'], 0);
        const q7 = new Question('W którym roku rozpoczęła się I wojna światowa?', ['1917', '1911', '1910', '1914'], 3);
        const q8 = new Question('W którym roku rozpoczęła się II wojna światowa?', ['1939', '1940', 'W 1941', 'W 1942'], 0);
        const q9 = new Question('W którym roku Polska przystąpiła do Unii Europejskiej?', ['2006', '2003', '2004', '2005'], 2);
        const q10 = new Question('Jaka słynna kopalnia znajduje się w Wieliczce?', ['Soli', 'Złota', 'Stali', 'Żelaza'], 0);
        const q11 = new Question('Ile lat liczy wiek?', ['10', '100', '1000', '10000'], 1);
        const q12 = new Question('Stolica Czech?', ['Wiedeń', 'Ankara', 'Madryt', 'Praga'], 3);
        const q13 = new Question('Jak nazywa się główna rzeka Bieszczad?', ['Wisła', 'Odra', 'San', 'Bug'], 2);
        const q14 = new Question('Jak nazywa się najmniejsze państwo świata?', ['Watykan', 'Czechy', 'Kanada', 'UK'], 0);
        const q15 = new Question('Która planeta jest najdalej oddalona od Słońca?', ['Neptun', 'Pluton', 'Wenus', 'Ziemia'], 1);
        const q16 = new Question('Jak inaczej nazywamy Ocean Spokojny? ', ['Pacyfik', 'Ocean Wielki', 'Międzymorze', 'Zatoka Spokojna'], 0);
        const q17 = new Question('Ilu aktorów bierze udział w monologu? ', ['4', '3', '2', '1'], 3);
        const q18 = new Question('Z jakiego warzywa robiony jest bigos?', ['Z ziemniaków', 'Z kapusty', 'Z dyni', 'Z marchewki'], 1);
        const q19 = new Question('Jak się nazywa kąt między 90º i 180º?', ['Rozwarty', 'Zwarty', 'Półpełny', 'Ostry'], 0);
        const q20 = new Question('Ile stopni ma kąt prosty?', ['180', '0', '60', '90'], 3);
        const q21 = new Question('. Ile osób jest w kwintecie?', ['10', '20', '5', '2'], 2);
        const q22 = new Question('Tuzin to ile sztuk?', ['3', '6', '12', '18'], 2);
        const q23 = new Question('Ile to jest 20% ze 100?', ['2', '20', '40', '24'], 1);
        const q24 = new Question('Ile dni trwa Wielki Post?', ['40', '80', '360', '30'], 0);
        const q25 = new Question('Co w języku angielskim oznacza wyraz rain?', ['Deszcz', 'Ogień', 'Biec', 'Skakać'], 0);
        const q26 = new Question('Jaki jest wynik: 2x3x2+2', ['20', '16', '14', '10'], 2);
        const q27 = new Question('Kto ukryty był pod postacią Bestii w baśni „Piękna i Bestia”?', ['Książę', 'Żebrak', 'Czarodziej', 'Złodziej'], 0);
        const q28 = new Question('Tytuł bajki: „Wilk i ...”?', ['Kura', 'Zając', 'Owca', 'Lis'], 1);
        const q29 = new Question('Pierwiastek z 36 wynosi?', ['8', '18', '9', '6'], 3);
        const q30 = new Question('Kim był Jan Paweł II?', ['Prezydentem', 'Generałem', 'Papieżem', 'Powstańcem'], 2);

        this.addQuestion(q1);
        this.addQuestion(q2);
        this.addQuestion(q3);
        this.addQuestion(q4);
        this.addQuestion(q5);
        this.addQuestion(q6);
        this.addQuestion(q7);
        this.addQuestion(q8);
        this.addQuestion(q9);
        this.addQuestion(q10);
        this.addQuestion(q11);
        this.addQuestion(q12);
        this.addQuestion(q13);
        this.addQuestion(q14);
        this.addQuestion(q15);
        this.addQuestion(q16);
        this.addQuestion(q17);
        this.addQuestion(q18);
        this.addQuestion(q19);
        this.addQuestion(q20);
        this.addQuestion(q21);
        this.addQuestion(q22);
        this.addQuestion(q23);
        this.addQuestion(q24);
        this.addQuestion(q25);
        this.addQuestion(q26);
        this.addQuestion(q27);
        this.addQuestion(q28);
        this.addQuestion(q29);
        this.addQuestion(q30);
    }
}

