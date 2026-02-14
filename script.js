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

// Массив с твоими 5 картинками-мемами (замени пути на свои!)
const memeImages = [
    'images/1.jpeg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpeg'
];

let messageIndex = 0;
let imageIndex = 0; // счётчик показанных мемов (0..5)

// Функция для клика по кнопке "Нет"
function handleNoClick() {
    // Меняем текст на кнопке "Нет"
    noBtn.textContent = noMessages[messageIndex % noMessages.length];
    messageIndex++;

    // Увеличиваем кнопку "Да"
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.2) + 'px';
    yesBtn.style.padding = (15 * 1.2) + 'px ' + (30 * 1.2) + 'px';

    // Обработка картинок
    if (imageIndex < memeImages.length) {
        // Показываем очередной мем
        gifImg.src = memeImages[imageIndex];
        imageIndex++;
    } else if (imageIndex === memeImages.length) {
        // Это шестой клик — показываем choice.jpg и убираем кнопку "Нет"
        gifImg.src = 'images/choice.jpg'; // путь к твоей шестой картинке
        imageIndex++;
        noBtn.style.display = 'none';
    }
    // если imageIndex > memeImages.length, то кнопка "Нет" уже скрыта, ничего не делаем
}

// Функция для нажатия "Да" — финальный экран
function handleYes() {
    // Полностью очищаем body
    document.body.innerHTML = '';

    // --- 1. Контейнер с прокруткой и романтичным фоном ---
    const finalContainer = document.createElement('div');
    finalContainer.style.position = 'fixed';
    finalContainer.style.top = '0';
    finalContainer.style.left = '0';
    finalContainer.style.width = '100vw';
    finalContainer.style.height = '100vh';
    finalContainer.style.overflow = 'auto';   // скролл для фото
    finalContainer.style.background = 'linear-gradient(135deg, #ffdde1, #f9c9e2, #ffb6c1)';
    finalContainer.style.textAlign = 'center';

    // --- 2. Текст поверх ---
    const loveText = document.createElement('h1');
    loveText.textContent = 'Я ТЕБЯ ЛЮБЛЮ';
    loveText.style.color = '#fff';
    loveText.style.fontSize = 'clamp(2rem, 10vw, 5rem)';
    loveText.style.textShadow = '2px 2px 20px rgba(255, 105, 180, 0.7)';
    loveText.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    loveText.style.padding = '20px 40px';
    loveText.style.borderRadius = '50px';
    loveText.style.fontFamily = 'Arial, sans-serif';
    loveText.style.margin = '30px auto';
    loveText.style.display = 'inline-block';
    loveText.style.backdropFilter = 'blur(5px)';
    loveText.style.border = '1px solid rgba(255,255,255,0.3)';
    loveText.style.boxShadow = '0 0 50px rgba(255, 105, 180, 0.5)';

    // --- 3. Ваше фото (с возможностью прокрутки) ---
    const img = document.createElement('img');
    img.src = 'images/us.png';  // убедись, что имя файла совпадает!
    img.alt = 'Наше фото';
    img.style.maxWidth = '100%';
    img.style.width = 'auto';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = '0 auto 50px';
    img.style.borderRadius = '20px';
    img.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.6)';
    img.style.border = '5px solid rgba(255,255,255,0.5)';

    // Собираем контейнер
    finalContainer.appendChild(loveText);
    finalContainer.appendChild(img);
    document.body.appendChild(finalContainer);

    // --- 4. Плавающие сердечки (поверх всего, но не мешают скроллу) ---
    const heartsContainer = document.createElement('div');
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.pointerEvents = 'none'; // клики проходят сквозь сердечки
    heartsContainer.style.zIndex = '10000';
    document.body.appendChild(heartsContainer);

    // Создаём 30 сердечек со случайными параметрами
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.opacity = Math.random() * 0.6 + 0.3;
        heart.style.color = 'rgba(255, 0, 100, 0.9)';
        heart.style.textShadow = '0 0 10px rgba(255, 0, 100, 0.7)';
        heart.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
    }

    // Добавляем ключевые кадры анимации, если их ещё нет
    if (!document.querySelector('#heartAnimation')) {
        const style = document.createElement('style');
        style.id = 'heartAnimation';
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}
