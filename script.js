// Simple i18n implementation
const translations = {
    en: {
        title: "Anna Sapota",
        subtitle: "More than 10 years I manage the life and wellness of the mankind to become better versions of themselves everyday. Don't miss your chance to become a better version of yourself!",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        monthly: "Couch-Session",
        biannual: "Subscription",
        annual: "Annual",
        monthlyDesc: "1 - 1,5 hours session",
        biannualDesc: "Monthly subscription for my products",
        annualDesc: "35% off annual plan for a year",
        contacts0: "0 – 500 contacts",
        contacts1: "501 – 1,000 contacts",
        contacts2: "1,001 – 2,500 contacts",
        copyCode: "Select and Pay",
        alreadyUsing: "Already Using Moosend?",
        loginLink: "Login To Your Moosend Account",
        // Legal pages translations
        backToMain: "← Back to Main Page",
        termsTitle: "Terms and Conditions",
        refundTitle: "Refund Policy",
        contactTitle: "Contact Information",
        serviceDesc: "Service Description",
        paymentTerms: "Payment Terms",
        serviceDelivery: "Service Delivery",
        userResponsibilities: "User Responsibilities",
        limitationLiability: "Limitation of Liability",
        governingLaw: "Governing Law",
        refundEligibility: "Refund Eligibility",
        nonRefundable: "Non-Refundable Situations",
        refundProcess: "Refund Process",
        processingTime: "Processing Time",
        partialRefunds: "Partial Refunds",
        chargebackPolicy: "Chargeback Policy",
        companyDetails: "Company Details",
        contactDetails: "Contact Details",
        businessHours: "Business Hours",
        bankingInfo: "Banking Information",
        additionalInfo: "Additional Information"
    },
    ru: {
        title: "Анна Сапота",
        subtitle: "Более 10 лет я управляю жизнью и благополучием человечества, чтобы каждый день оно становилось лучше. Не упустите свой шанс стать лучшей версией себя!",
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
        // Legal pages translations
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
        chargebackPolicy: "Политика Оспаривания",
        companyDetails: "Детали Компании",
        contactDetails: "Контактные Детали",
        businessHours: "Рабочие Часы",
        bankingInfo: "Банковская Информация",
        additionalInfo: "Дополнительная Информация"
    },
    uk: {
        title: "Анна Сапота",
        subtitle: "Більше 10 років я керую життям та благополуччям людства, щоб воно кожен день ставало кращим. Не пропустіть свій шанс стати кращою версією себе!",
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
        loginLink: "Увійти до Вашого Облікового Запису Moosend",
        // Legal pages translations
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
        refundEligibility: "Право на Повернення Коштів",
        nonRefundable: "Неповертні Ситуації",
        refundProcess: "Процес Повернення Коштів",
        processingTime: "Час Обробки",
        partialRefunds: "Часткові Повернення",
        chargebackPolicy: "Політика Оспорювання",
        companyDetails: "Деталі Компанії",
        contactDetails: "Контактні Деталі",
        businessHours: "Робочі Години",
        bankingInfo: "Банківська Інформація",
        additionalInfo: "Додаткова Інформація"
    }
};

let currentLanguage = 'uk';

// Initialize i18n
function initI18n() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'uk';
    changeLanguage(savedLang);
}

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update select options
    updateSelectOptions();

    // Update language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = lang;
    }
}

// Update select options
function updateSelectOptions() {
    const selects = document.querySelectorAll('.plan select');
    selects.forEach(select => {
        const options = select.querySelectorAll('option');
        options[0].textContent = translations[currentLanguage].contacts0;
        options[1].textContent = translations[currentLanguage].contacts1;
        options[2].textContent = translations[currentLanguage].contacts2;
    });
}

// Countdown Timer
const countdown = () => {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Only run countdown if all elements exist
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        return;
    }

    const endDate = new Date("November 29, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const diff = endDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
};

// WayForPay Integration
function pay(description, amountInCents) {
    const wayforpay = new Wayforpay();
    wayforpay.run({
        merchantAccount: "test_merch_n1",
        merchantDomainName: "yourdomain.com",
        orderReference: "BFM-" + Math.floor(Math.random() * 100000),
        orderDate: Math.floor(Date.now() / 1000),
        amount: amountInCents / 100,
        currency: "USD",
        productName: [description],
        productPrice: [amountInCents / 100],
        productCount: [1],
        clientFirstName: "",
        clientLastName: "",
        clientEmail: "",
        clientPhone: "",
        language: "EN"
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initI18n();
    
    // Only run countdown on pages that have countdown elements
    if (document.getElementById("days")) {
        setInterval(countdown, 1000);
        countdown(); // Run immediately
    }
});
