/* Analytics with GoatCounter (https://aleleyva9.goatcounter.com). No cookies, no personal data.
   1. Sections. About, Work, CV, More and Contact live in one file, so each one is counted
      as its own page (/about, /work, /cv, /more, /contact) when it is shown.
   2. Clicks. Any link or button with data-track="some-name" is counted as an event
      with that name. To follow a new link, add data-track="a-clear-name" to it. */
(function () {
  var sections = ['about', 'work', 'cv', 'more', 'contact'];
  var isHome = !!document.getElementById('view-about');

  // Run fn once GoatCounter's script has loaded (it loads async); give up after 10 s.
  function ready(fn) {
    var tries = 0;
    (function wait() {
      if (window.goatcounter && window.goatcounter.count) return fn();
      if (++tries < 50) setTimeout(wait, 200);
    })();
  }

  if (isHome) {
    var first = true, last = null;
    var countSection = function () {
      var name = (location.hash || '#about').slice(1);
      if (sections.indexOf(name) < 0) name = 'about';
      if (name === last) return;
      last = name;
      var opts = { path: '/' + name, title: name.charAt(0).toUpperCase() + name.slice(1) + ' · Alejandra Leyva' };
      if (name === 'cv') opts.title = 'CV · Alejandra Leyva';
      if (!first) opts.referrer = '';   // only the first view carries where the visitor came from
      first = false;
      ready(function () { window.goatcounter.count(opts); });
    };
    window.addEventListener('hashchange', countSection);
    countSection();
  }

  function clicked(e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-track]') : null;
    if (!el) return;
    var name = el.getAttribute('data-track');
    var title = el.getAttribute('data-track-title') || (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120) || name;
    ready(function () { window.goatcounter.count({ path: name, title: title, event: true, referrer: '' }); });
  }
  document.addEventListener('click', clicked, true);
  document.addEventListener('auxclick', clicked, true);   // middle click opens a new tab
})();
