
// Add event listeners to toggle FAQ answers
const faqItems = document.querySelectorAll('.faq-qs-box');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
    });
    item.classList.toggle('active');
  });
});