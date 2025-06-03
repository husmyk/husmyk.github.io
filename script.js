
// Translations object
const translations = {
  en: {
    title: "MindMaster Coaching",
    subtitle: "Coaching and psychological support for growth",
    about_title: "About Me",
    about_text: "I am a certified coach helping individuals overcome mental barriers, improve productivity, and build meaningful lives through one-on-one sessions and guided coaching programs.",
    standard: "Standard",
    premium: "Premium",
    s1: "1 coaching session",
    s2: "60 minutes",
    s3: "Email support",
    p1: "3 coaching sessions",
    p2: "Each 60 minutes",
    p3: "Chat support",
    select: "Select"
  },
  ru: {
    title: "MindMaster Коучинг",
    subtitle: "Коучинг и психологическая поддержка для роста",
    about_title: "Обо мне",
    about_text: "Я сертифицированный коуч, помогающий людям преодолевать ментальные барьеры, повышать продуктивность и строить осмысленную жизнь через индивидуальные сессии и программы коучинга.",
    standard: "Стандарт",
    premium: "Премиум",
    s1: "1 коуч-сессия",
    s2: "60 минут",
    s3: "Поддержка по email",
    p1: "3 коуч-сессии",
    p2: "Каждая по 60 минут",
    p3: "Поддержка в чате",
    select: "Выбрать"
  },
  ua: {
    title: "MindMaster Коучинг",
    subtitle: "Коучинг та психологічна підтримка для зростання",
    about_title: "Про мене",
    about_text: "Я сертифікований коуч, який допомагає людям долати ментальні бар'єри, підвищувати продуктивність та будувати осмислене життя через індивідуальні сесії та програми коучингу.",
    standard: "Стандарт",
    premium: "Преміум",
    s1: "1 коуч-сесія",
    s2: "60 хвилин",
    s3: "Підтримка на email",
    p1: "3 коуч-сесії",
    p2: "Кожна по 60 хвилин",
    p3: "Підтримка у чаті",
    select: "Обрати"
  }
};

// Language switching function
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// WayForPay Payment Integration
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.select-plan').forEach(button => {
    button.addEventListener('click', () => {
      const plan = button.getAttribute('data-plan');
      const productName = plan === 'standard' ? 'Коуч-сессия Стандарт' : 'Коуч-пакет Премиум';
      const productPrice = plan === 'standard' ? 500 : 1200;

      // Check if WayForPay is available
      if (typeof Wayforpay !== 'undefined') {
        const wayforpay = new Wayforpay();
        wayforpay.run({
          merchantAccount: "your_merchant_account",
          merchantDomainName: "yourdomain.com",
          authorizationType: "SimpleSignature",
          merchantSignature: "your_signature",
          orderReference: "ORDER-" + Date.now(),
          orderDate: Math.floor(Date.now() / 1000),
          amount: productPrice,
          currency: "UAH",
          productName: [productName],
          productPrice: [productPrice],
          productCount: [1],
          clientFirstName: "",
          clientLastName: "",
          clientEmail: "",
          clientPhone: ""
        });
      } else {
        // Fallback if payment system is not available
        alert(`Selected: ${productName} - ${productPrice} UAH`);
      }
    });
  });
});
