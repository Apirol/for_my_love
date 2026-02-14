const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');

// Массив фраз для кнопки "Нет"
const noMessages = [
    'Точно нет?',
    'Подумай еще!',
    'Я буду плакать 😢',
    'Ну пожалуйста!',
    'Ты уверена?',
    'Жми "Да"!'
];
let messageIndex = 0;

function handleNo() {
    // Меняем текст кнопки "Нет"
    noBtn.textContent = noMessages[messageIndex % noMessages.length];
    messageIndex++;

    // Увеличиваем кнопку "Да"
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.2) + 'px';
    yesBtn.style.padding = (15 * 1.2) + 'px ' + (30 * 1.2) + 'px';
}

function handleYes() {
    // Здесь можно указать любой URL или скрыть контент и показать поздравление
    // Например, заменим заголовок
    question.innerHTML = 'УРА!!! Я ТАК СЧАСТЛИВ! ❤️❤️❤️';
    document.querySelector('.gif').src = 'https://media.giphy.com/media/3o7abB06u9bNzA8LC8/giphy.gif'; // Ссылка на счастливый гиф
    noBtn.style.display = 'none';
    yesBtn.textContent = 'Я тебя люблю!';
}

// Чтобы кнопка "Нет" реагировала на клик так же, как и на наведение (на случай мобильных)
function handleNoClick() {
    handleNo();
}
