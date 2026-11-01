/* Builds the page from content.js. You normally don't need to edit this file. */
(function () {
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function toast(msg) { var t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('show'); }, 2600); }
  function link(label, url) {
    var a = el('a', null, label);
    if (url === 'demo') { a.href = '#'; a.addEventListener('click', function (e) { e.preventDefault(); toast('Demo link: in a real portfolio this opens ' + label + '.'); }); }
    else { a.href = url; if (/^https?:/.test(url)) { a.target = '_blank'; a.rel = 'noopener'; } }
    return a;
  }
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var animate = S.animations !== false && !reduce;
  document.documentElement.classList.add(animate ? 'anim' : 'no-anim');

  var c = S.colors || {}, st = document.documentElement.style;
  if (c.bg) { st.setProperty('--bg', c.bg); document.querySelector('meta[name=theme-color]').content = c.bg; }
  if (c.text) st.setProperty('--text', c.text);
  if (c.accent1) st.setProperty('--a1', c.accent1);
  if (c.accent2) st.setProperty('--a2', c.accent2);

  $('logoName').textContent = S.shortName || S.name;
  $('avail').textContent = S.available || ''; if (!S.available) $('avail').remove();
  var h = $('hTitle'); h.setAttribute('aria-label', (S.headline || []).join(' '));
  (S.headline || []).forEach(function (line) { var l = el('span', 'line'); l.setAttribute('aria-hidden', 'true'); l.appendChild(el('span', null, line)); h.appendChild(l); });
  $('intro').textContent = S.intro;

  var items = (S.marquee || []);
  $('marqueeSr').textContent = 'What I do: ' + items.join(', ');
  [0, 1].forEach(function () { items.forEach(function (m) { $('marquee').appendChild(el('span', null, m)); }); });

  // work grid + filters
  var cats = ['All'];
  (S.work || []).forEach(function (w) { if (cats.indexOf(w.category) < 0) cats.push(w.category); });
  cats.forEach(function (cat, i) {
    var b = el('button', null, cat); b.type = 'button'; b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    b.addEventListener('click', function () {
      $('filters').querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      $('grid').querySelectorAll('.item').forEach(function (it) { it.hidden = !(cat === 'All' || it.dataset.cat === cat); });
    });
    $('filters').appendChild(b);
  });
  (S.work || []).forEach(function (w) {
    var b = el('button', 'item reveal'); b.type = 'button'; b.dataset.cat = w.category;
    b.setAttribute('aria-label', w.title + ', ' + w.category + ', ' + w.year + '. Open details');
    var d = el('div', 'img'); var img = el('img'); img.src = w.image; img.alt = ''; img.loading = 'lazy'; img.width = 800; img.height = 600; d.appendChild(img); b.appendChild(d);
    var m = el('div', 'meta'); m.appendChild(el('h3', null, w.title)); m.appendChild(el('small', null, w.category + ' · ' + w.year)); b.appendChild(m);
    b.addEventListener('click', function () { openLb(w); });
    $('grid').appendChild(b);
  });
  var lb = $('lightbox'), lastFocus;
  function openLb(w) {
    lastFocus = document.activeElement;
    $('lbImg').src = w.image; $('lbImg').alt = w.title; $('lbCat').textContent = w.category + ' · ' + w.year; $('lbTitle').textContent = w.title; $('lbDesc').textContent = w.desc;
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
  }
  function closeLb() { if (lb.close) lb.close(); else lb.removeAttribute('open'); }
  $('lbClose').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  lb.addEventListener('close', function () { if (lastFocus) lastFocus.focus(); });

  // about
  $('aboutName').textContent = S.shortName || S.name;
  var ph = $('photo');
  if (S.photo) { var pi = el('img'); pi.src = S.photo; pi.alt = 'Photo of ' + S.name; pi.loading = 'lazy'; pi.width = 640; pi.height = 800; pi.onerror = function () { ph.remove(); }; ph.appendChild(pi); } else ph.remove();
  (S.about || []).forEach(function (p) { $('aboutText').appendChild(el('p', null, p)); });
  (S.numbers || []).forEach(function (n) { var d = el('div'); d.appendChild(el('dt', null, n.value)); d.appendChild(el('dd', null, n.label)); $('numbers').appendChild(d); });
  (S.tools || []).forEach(function (t) { $('tools').appendChild(el('li', null, t)); });
  (S.process || []).forEach(function (p) { var li = el('li', 'reveal'); li.appendChild(el('h3', null, p.title)); li.appendChild(el('p', null, p.text)); $('steps').appendChild(li); });
  (S.testimonials || []).forEach(function (q) { var f = el('figure', 'reveal'); f.appendChild(el('blockquote', null, '“' + q.quote + '”')); f.appendChild(el('figcaption', null, q.by)); $('quotes').appendChild(f); });

  // contact
  var C = S.contact || {};
  $('contactH').textContent = C.heading || 'Contact'; $('cText').textContent = C.text || '';
  $('cEmail').textContent = S.email; $('cEmail').href = 'mailto:' + S.email;
  (S.socials || []).forEach(function (s) { var li = el('li'); li.appendChild(link(s.label, s.url)); $('socials').appendChild(li); });
  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('fName').value.trim(), m = $('fMail').value.trim(), msg = $('fMsg').value.trim(), err = $('formErr');
    if (!n || !msg || !/^\S+@\S+\.\S+$/.test(m)) { err.textContent = 'Please fill in your name, a valid email and your project details.'; return; }
    err.textContent = '';
    window.location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent('Project enquiry from ' + n) + '&body=' + encodeURIComponent(msg + '\n\n— ' + n + ' (' + m + ')');
    toast('Opening your email app…');
  });
  $('footName').textContent = S.name; $('loc').textContent = S.location || ''; $('year').textContent = new Date().getFullYear();
  $('footNote').textContent = S.footerNote || '';

  // menu
  var mb = $('menuBtn'), menu = $('menu');
  mb.addEventListener('click', function () { var o = menu.classList.toggle('open'); mb.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { menu.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); } });
  var nav = document.querySelector('.nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // animations
  requestAnimationFrame(function () { requestAnimationFrame(function () { document.documentElement.classList.add('loaded'); }); });
  var rev = document.querySelectorAll('.reveal');
  if (animate && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rev.forEach(function (r) { io.observe(r); });
  } else rev.forEach(function (r) { r.classList.add('in'); });
})();
