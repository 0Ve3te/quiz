class Question {
    constructor(text, answerTab, correctIndex ) {
        this.text = text;
        this.answerTab = answerTab;
        let _correctIndex = correctIndex;
        this.getCorrectIndex = () => _correctIndex;
    }
}
