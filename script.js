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
    'images/1.jpeg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpeg'
];

let messageIndex = 0;
let imageIndex = 0;

// Функция для клика по кнопке "Нет" — теперь только здесь меняется текст и картинка
function handleNoClick() {
    // Меняем текст на кнопке "Нет"
    noBtn.textContent = noMessages[messageIndex % noMessages.length];
    messageIndex++;

    // Увеличиваем кнопку "Да"
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.2) + 'px';
    yesBtn.style.padding = (15 * 1.2) + 'px ' + (30 * 1.2) + 'px';

    // Меняем картинку на следующую
    if (memeImages.length > 0) {
        gifImg.src = memeImages[imageIndex % memeImages.length];
        imageIndex++;
    }
}

// Функция для нажатия "Да" — финальный экран
function handleYes() {
    // Полностью очищаем body
    document.body.innerHTML = '';

    // Контейнер с прокруткой
    const finalContainer = document.createElement('div');
    finalContainer.style.position = 'fixed';
    finalContainer.style.top = '0';
    finalContainer.style.left = '0';
    finalContainer.style.width = '100vw';
    finalContainer.style.height = '100vh';
    finalContainer.style.overflow = 'auto';   // Включаем скролл
    finalContainer.style.backgroundColor = '#000'; // фон, если фото не загрузится
    finalContainer.style.textAlign = 'center';

    // Текст (остаётся вверху, не прокручивается вместе с фото? 
    // В этом варианте текст тоже будет прокручиваться, но мы сделаем его сверху и он уедет, если фото большое.
    // Чтобы текст был всегда виден, можно добавить отдельный фиксированный блок, но тогда он перекроет фото.
    // Проще: пусть текст тоже прокручивается, но будет крупным и заметным.
    
    const loveText = document.createElement('h1');
    loveText.textContent = 'Я ТЕБЯ ЛЮБЛЮ';
    loveText.style.color = 'white';
    loveText.style.fontSize = 'clamp(2rem, 10vw, 5rem)';
    loveText.style.textShadow = '2px 2px 10px rgba(0,0,0,0.8)';
    loveText.style.backgroundColor = 'rgba(0,0,0,0.3)';
    loveText.style.padding = '20px 40px';
    loveText.style.borderRadius = '50px';
    loveText.style.fontFamily = 'Arial, sans-serif';
    loveText.style.margin = '30px auto';
    loveText.style.display = 'inline-block';
    loveText.style.position = 'relative'; // чтобы не перекрывать скролл
    loveText.style.zIndex = '10';

    // Фото
    const img = document.createElement('img');
    img.src = 'images/us.png'; // ВНИМАНИЕ: проверь имя файла! Может быть us.jpg
    img.alt = 'Наше фото';
    img.style.maxWidth = '100%';
    img.style.width = 'auto';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = '0 auto 30px'; // отступ снизу
    img.style.borderRadius = '10px';
    img.style.boxShadow = '0 0 20px rgba(255,255,255,0.3)';

    // Собираем
    finalContainer.appendChild(loveText);
    finalContainer.appendChild(img);
    document.body.appendChild(finalContainer);
}
