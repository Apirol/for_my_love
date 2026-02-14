const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const gifImg = document.querySelector('.gif'); // сюда будут подставляться твои картинки

// Массив фраз для кнопки "Нет"
const noMessages = [
    'Точно нет?',
    'Подумай еще!',
    'Я буду плакать 😢',
    'Ну пожалуйста!',
    'Ты уверена?',
    'Жми "Да"!'
];

// Массив с твоими 5 картинками (замени пути на свои!)
const memeImages = [
    'images/1.jpg',   // первая картинка
    'images/2.jpg',   // вторая
    'images/3.jpg',   // третья
    'images/4.jpg',   // четвёртая
    'images/5.jpg'    // пятая
];

let messageIndex = 0;
let imageIndex = 0;   // счётчик для картинок

// Функция для наведения на кнопку "Нет" (меняет текст и увеличивает "Да")
function handleNo() {
    noBtn.textContent = noMessages[messageIndex % noMessages.length];
    messageIndex++;

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.2) + 'px';
    yesBtn.style.padding = (15 * 1.2) + 'px ' + (30 * 1.2) + 'px';
}

// Функция для клика по кнопке "Нет" (меняет текст + показывает следующую картинку)
function handleNoClick() {
    handleNo(); // сначала выполняем старую логику

    // Меняем картинку на следующую из массива
    if (memeImages.length > 0) {
        gifImg.src = memeImages[imageIndex % memeImages.length];
        imageIndex++;
    }
}

// Функция для нажатия "Да"
function handleYes() {
    question.innerHTML = 'УРА!!! Я ТАК СЧАСТЛИВ! ❤️❤️❤️';
    // Можно заменить на свою победную картинку
    gifImg.src = 'https://media.giphy.com/media/3o7abB06u9bNzA8LC8/giphy.gif';
    noBtn.style.display = 'none';
    yesBtn.textContent = 'Я тебя люблю!';
}
