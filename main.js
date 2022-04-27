const start = document.getElementById('start');
const game = document.querySelector('div.game');
const panel = document.querySelector('div.panel');
const summary = document.querySelector('.summary');
const quiz = new Quiz();

start.addEventListener('click', () => { 
    start.style.display = 'none';
    summary.style.display = 'none';
    game.style.display = 'flex';
    panel.style.height = '0%';
    Manage.showQuestion();
})