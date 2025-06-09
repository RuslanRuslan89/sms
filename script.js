// Динамически подключаем шаблоны
document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    hero: fetch('./sections/hero.html').then(res => res.text()),
    features: fetch('./sections/features.html').then(res => res.text()),
    analytics: fetch('./sections/analytics.html').then(res => res.text()),
    pricing: fetch('./sections/pricing.html').then(res => res.text()),
    testimonials: fetch('./sections/testimonials.html').then(res => res.text()),
    contact: fetch('./sections/contact.html').then(res => res.text())
  };

  Promise.all(Object.values(sections)).then(contents => {
    document.getElementById('hero').innerHTML = contents[0];
    document.getElementById('features').innerHTML = contents[1];
    document.getElementById('analytics').innerHTML = contents[2];
    document.getElementById('pricing').innerHTML = contents[3];
    document.getElementById('testimonials').innerHTML = contents[4];
    document.getElementById('contact').innerHTML = contents[5];

    initSliders();
    initCharts();
  });
});

function initSliders() {
  document.querySelectorAll('.slider').forEach(slider => {
    const span = slider.nextElementSibling.querySelector('.value');
    slider.addEventListener('input', () => {
      span.textContent = `${slider.value}%`;
    });
  });
}

function initCharts() {
  const ctx = document.querySelector('.chart-canvas');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май'],
        datasets: [{
          label: 'Открытия сообщений (%)',
          data: [45, 52, 60, 65, 70],
          borderColor: '#4CAF50',
          fill: false,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }
}
