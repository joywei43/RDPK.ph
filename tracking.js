// Set your own GA4 Measurement ID after creating a Red Dragon Poker web stream.
const RDPK_GA4_MEASUREMENT_ID = '';

if (/^G-[A-Z0-9]+$/.test(RDPK_GA4_MEASUREMENT_ID)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', RDPK_GA4_MEASUREMENT_ID);
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(RDPK_GA4_MEASUREMENT_ID);
  document.head.appendChild(tag);
}

document.addEventListener('click', function (event) {
  const link = event.target.closest('a[data-track]');
  if (!link || typeof window.gtag !== 'function') return;
  window.gtag('event', link.dataset.track, {
    link_url: link.href,
    placement: link.dataset.placement || (link.closest('#schedule-dialog') ? 'schedule' : link.closest('.hero') ? 'hero' : link.closest('.app-section') ? 'app_section' : 'other'),
    transport_type: 'beacon'
  });
});
