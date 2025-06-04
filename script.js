const translations = {
    uk: {
        title: "Анна Сапота",
        subtitle: "ПРОСУВАННЯ БЛОГУ І ОСОБИСТОГО БРЕНДУ НА РІВНІ, ГДЕ ПРОДАЮТЬ СИЛОЮ СЕНСІВ. Працюємо глибоко. Будуємо довіру. Збільшуємо дохід. Унікальний підхід від експерта з 10-річним досвідом у маркетингу і рекламі",
        days: "Дні",
        hours: "Години",
        minutes: "Хвилини",
        seconds: "Секунди",
        monthly: "Консультація",
        biannual: "Підписка",
        annual: "Річний",
        monthlyDesc: "Разова консультація на пропрацювання особистості",
        biannualDesc: "Місячна підписка на мої послуги",
        annualDesc: "35% знижка на річний план протягом року",
        contacts0: "0 – 500 контактів",
        contacts1: "501 – 1,000 контактів",
        contacts2: "1,001 – 2,500 контактів",
        copyCode: "Обрати та Оплатити",
        alreadyUsing: "Вже використовуєте Moosend?",
        loginLink: "Увійти в Ваш Аккаунт Moosend",
        legalInfo: "Юридична інформація:",
        terms: "Умови та положення",
        refund: "Політика повернення",
        contact: "Контактна інформація",
        backToMain: "← Повернутися на Головну Сторінку",
        termsTitle: "Умови та Положення",
        refundTitle: "Політика Повернення Коштів",
        contactTitle: "Контактна Інформація",
        serviceDesc: "Опис Послуги",
        paymentTerms: "Умови Оплати",
        serviceDelivery: "Надання Послуги",
        userResponsibilities: "Обов'язки Користувача",
        limitationLiability: "Обмеження Відповідальності",
        governingLaw: "Застосовне Право",
        refundEligibility: "Право на Повернення",
        nonRefundable: "Невідшкодовувані Ситуації",
        refundProcess: "Процес Повернення",
        processingTime: "Час Обробки",
        partialRefunds: "Часткові Повернення",
        chargebackPolicy: "Політика Оспорювання",
        companyDetails: "Деталі Компанії",
        contactDetails: "Контактні Деталі",
        businessHours: "Робочі Години",
        bankingInfo: "Банківська Інформація",
        additionalInfo: "Додаткова Інформація",
        socialNetworks: "МОЇ СОЦІАЛЬНІ МЕРЕЖІ",
        instagram: "INSTAGRAM",
        telegram: "TELEGRAM-КАНАЛ",
        tiktok: "TIKTOK",
        youtube: "YOUTUBE",
        mindMapTitle: "ПЕРЕХОДИ НА MIND MAP ВСІХ МОЇХ ПРОДУКТІВ",
        visitSite: "Перейти на сайт",
        questionsLeft: "ЗАЛИШИСЬ ПИТАННЯ?",
        askDirect: "ЗАДАЙТЕ ЇХ МЕНІ ОСОБИСТО В DIRECT",
        writeInDirect: "Написати в Direct",
        payNow: "Оплатити Зараз"
    },
    ru: {
        title: "Анна Сапота",
        subtitle: "ПРОДВИЖЕНИЕ БЛОГА И ЛИЧНОГО БРЕНДА НА УРОВНЕ, ГДЕ ПРОДАЮТ СИЛОЙ СМЫСЛОВ. Работаем глубоко. Строим доверие. Увеличиваем доход. Уникальный подход от эксперта с 10-летним опытом в маркетинге и рекламе",
        days: "Дни",
        hours: "Часы",
        minutes: "Минуты",
        seconds: "Секунды",
        monthly: "Консультация",
        biannual: "Подписка",
        annual: "Годовой",
        monthlyDesc: "Разовая консультация на проработку личности",
        biannualDesc: "Месячная подписка на мои услуги",
        annualDesc: "35% скидка на годовой план на год",
        contacts0: "0 – 500 контактов",
        contacts1: "501 – 1,000 контактов",
        contacts2: "1,001 – 2,500 контактов",
        copyCode: "Выбрать и Оплатить",
        alreadyUsing: "Уже используете Moosend?",
        loginLink: "Войти в Ваш Аккаунт Moosend",
        legalInfo: "Юридическая информация:",
        terms: "Условия и положения",
        refund: "Политика возврата",
        contact: "Контактная информация",
        backToMain: "← Вернуться на Главную Страницу",
        termsTitle: "Условия и Положения",
        refundTitle: "Политика Возврата",
        contactTitle: "Контактная Информация",
        serviceDesc: "Описание Услуги",
        paymentTerms: "Условия Оплаты",
        serviceDelivery: "Предоставление Услуги",
        userResponsibilities: "Обязанности Пользователя",
        limitationLiability: "Ограничение Ответственности",
        governingLaw: "Применимое Право",
        refundEligibility: "Право на Возврат",
        nonRefundable: "Невозвратные Ситуации",
        refundProcess: "Процесс Возврата",
        processingTime: "Время Обработки",
        partialRefunds: "Частичные Возвраты",
        chargebackPolicy: "Политика Оспоривания",
        companyDetails: "Детали Компании",
        contactDetails: "Контактные Детали",
        businessHours: "Рабочие Часы",
        bankingInfo: "Банковская Информация",
        additionalInfo: "Дополнительная Информация",
        socialNetworks: "МОИ СОЦИАЛЬНЫЕ СЕТИ",
        instagram: "INSTAGRAM",
        telegram: "TELEGRAM-КАНАЛ",
        tiktok: "TIKTOK",
        youtube: "YOUTUBE",
        mindMapTitle: "ПЕРЕХОДИ НА MIND MAP ВСЕХ МОИХ ПРОДУКТОВ",
        visitSite: "Перейти на сайт",
        questionsLeft: "ОСТАЛИСЬ ВОПРОСЫ?",
        askDirect: "ЗАДАЙТЕ ИХ МНЕ ЛИЧНО В DIRECT",
        writeInDirect: "Написать в Direct",
        payNow: "Оплатить Сейчас"
    }
};

// Set default language to Ukrainian
let currentLanguage = 'uk';

// Function to translate the page
function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference, default to Ukrainian
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'uk';
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage);

    // Initialize countdown
    initCountdown();
});

// Countdown functionality
function initCountdown() {
    const countdownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days from now

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerHTML = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.innerHTML = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.innerHTML = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            const countdownEl = document.getElementById("countdown");
            if (countdownEl) countdownEl.innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Payment function
function pay(planName, amount) {
    // WayForPay integration
    const wayforpay = new Wayforpay();
    const payFunc = function () {
        wayforpay.run({
            merchantAccount: "annasapota_com",
            merchantDomainName: window.location.hostname,
            authorizationType: "SimpleSignature",
            merchantSignature: "generated_signature_here",
            orderReference: Date.now().toString(),
            orderDate: Math.floor(Date.now() / 1000),
            amount: amount / 100,
            currency: "EUR",
            productName: [planName],
            productPrice: [amount / 100],
            productCount: [1],
            clientFirstName: "Client",
            clientLastName: "Name",
            clientEmail: "client@example.com",
            clientPhone: "380000000000",
            language: currentLanguage.toUpperCase()
        }, 
        function (response) {
            // Success callback
            console.log('Payment successful:', response);
        },
        function (response) {
            // Failure callback  
            console.log('Payment failed:', response);
        });
    };
    payFunc();
}