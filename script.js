
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

// Language switching functionality is handled in the HTML inline script
