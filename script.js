const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const gifImg = document.querySelector('.gif');
const container = document.querySelector('.container');

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
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
];

let messageIndex = 0;
let imageIndex = 0;

// Функция для наведения на кнопку "Нет"
function handleNo() {
    noBtn.textContent = noMessages[messageIndex % noMessages.length];
    messageIndex++;

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.2) + 'px';
    yesBtn.style.padding = (15 * 1.2) + 'px ' + (30 * 1.2) + 'px';
}

// Функция для клика по кнопке "Нет"
function handleNoClick() {
    handleNo();

    if (memeImages.length > 0) {
        gifImg.src = memeImages[imageIndex % memeImages.length];
        imageIndex++;
    }
}

// Новая функция для нажатия "Да" — показывает фото на весь экран
function handleYes() {
    // Полностью очищаем body и создаём новый полноэкранный блок
    document.body.innerHTML = ''; // удаляем всё текущее содержимое

    // Создаём контейнер для финального экрана
    const finalScreen = document.createElement('div');
    finalScreen.id = 'finalScreen';
    
    // Устанавливаем стили прямо через JS (можно и через CSS, но так проще)
    finalScreen.style.position = 'fixed';
    finalScreen.style.top = '0';
    finalScreen.style.left = '0';
    finalScreen.style.width = '100vw';
    finalScreen.style.height = '100vh';
    finalScreen.style.backgroundImage = 'url("images/us.jpg")'; // ← замени на своё фото!
    finalScreen.style.backgroundSize = 'cover';
    finalScreen.style.backgroundPosition = 'center';
    finalScreen.style.display = 'flex';
    finalScreen.style.alignItems = 'center';
    finalScreen.style.justifyContent = 'center';
    finalScreen.style.flexDirection = 'column';
    finalScreen.style.zIndex = '9999';

    // Текст поверх фото
    const loveText = document.createElement('h1');
    loveText.textContent = 'Я ТЕБЯ ЛЮБЛЮ';
    loveText.style.color = 'white';
    loveText.style.fontSize = 'clamp(2rem, 10vw, 5rem)';
    loveText.style.textShadow = '2px 2px 10px rgba(0,0,0,0.8)';
    loveText.style.backgroundColor = 'rgba(0,0,0,0.3)';
    loveText.style.padding = '20px 40px';
    loveText.style.borderRadius = '50px';
    loveText.style.fontFamily = 'Arial, sans-serif';
    loveText.style.textAlign = 'center';

    finalScreen.appendChild(loveText);
    document.body.appendChild(finalScreen);
}
