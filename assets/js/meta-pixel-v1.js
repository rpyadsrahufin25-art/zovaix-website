/* ZOVAIX Meta Pixel. Kept as a first-party file so CSP and cache behaviour are deterministic. */
(function (window, document) {
  if (window.fbq) return;

  var fbq = window.fbq = function () {
    fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
  };
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  var pixelScript = document.createElement('script');
  pixelScript.async = true;
  pixelScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
  pixelScript.onload = function () { window.dispatchEvent(new Event('zovaix:pixel-ready')); };
  pixelScript.onerror = function () { window.dispatchEvent(new Event('zovaix:pixel-blocked')); };
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(pixelScript, firstScript);

  fbq('init', '2766666187085158');
  fbq('track', 'PageView');

  function trackContact() { fbq('track', 'Contact'); }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function (link) {
      link.addEventListener('click', trackContact, { passive: true });
    });
  });
})(window, document);
