/* Builds the page from content.js. You normally don't need to edit this file. */
(function () {
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function toast(msg) { var t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('show'); }, 2600); }
  var ICONS = {
    mail: '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.5" fill="currentColor"/>',
    phone: '<path d="M6 3h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="2"/>',
    link: '<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  };
  var c = S.colors || {}, st = document.documentElement.style;
  if (c.accent) { st.setProperty('--accent', c.accent); document.querySelector('meta[name=theme-color]').content = c.accent; }
  if (c.page) st.setProperty('--page', c.page);

  $('name').textContent = S.name; $('title').textContent = S.title;
  (S.contacts || []).forEach(function (k) {
    var li = el('li'); li.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[k.icon] || ICONS.link) + '</svg>';
    var t;
    if (k.url === 'demo') { t = el('a', null, k.label); t.href = '#'; t.addEventListener('click', function (e) { e.preventDefault(); toast('Demo link: in a real resume this opens ' + k.label + '.'); }); }
    else if (k.url) { t = el('a', null, k.label); t.href = k.url; if (/^https?:/.test(k.url)) { t.target = '_blank'; t.rel = 'noopener'; } }
    else t = el('span', null, k.label);
    li.appendChild(t); $('contacts').appendChild(li);
  });
  if (S.photo) { var img = el('img'); img.src = S.photo; img.alt = 'Photo of ' + S.name; img.width = 248; img.height = 248; img.onerror = function () { var p = $('photo'); if (p) p.remove(); }; $('photo').appendChild(img); } else $('photo').remove();
  $('summary').textContent = S.summary;
  (S.highlights || []).forEach(function (h) { var d = el('div'); d.appendChild(el('dt', null, h.value)); d.appendChild(el('dd', null, h.label)); $('highlights').appendChild(d); });
  if (!(S.highlights || []).length) $('highlights').remove();

  (S.experience || []).forEach(function (j) {
    var d = el('article', 'job'); var top = el('div', 'job-top'); top.appendChild(el('h3', null, j.role)); top.appendChild(el('span', 'when', j.when)); d.appendChild(top);
    d.appendChild(el('p', 'org', j.org + (j.place ? ' · ' + j.place : '')));
    var ul = el('ul'); (j.points || []).forEach(function (p) { ul.appendChild(el('li', null, p)); }); d.appendChild(ul); $('exp').appendChild(d);
  });
  (S.projects || []).forEach(function (p) { var d = el('div', 'proj'); d.appendChild(el('h3', null, p.title)); d.appendChild(el('p', null, p.text)); $('proj').appendChild(d); });
  if (!(S.projects || []).length) $('proj').parentNode.remove();
  (S.education || []).forEach(function (e) {
    var d = el('article', 'job'); var top = el('div', 'job-top'); top.appendChild(el('h3', null, e.degree)); top.appendChild(el('span', 'when', e.when)); d.appendChild(top);
    d.appendChild(el('p', 'org', e.school + (e.note ? ' · ' + e.note : ''))); $('edu').appendChild(d);
  });
  (S.skills || []).forEach(function (s) { $('skills').appendChild(el('li', null, s)); });
  (S.certifications || []).forEach(function (s) { $('certs').appendChild(el('li', null, s)); });
  (S.achievements || []).forEach(function (s) { $('ach').appendChild(el('li', null, s)); });
  $('langs').textContent = (S.languages || []).join(' · ');

  if (S.resume) $('pdfBtn').href = S.resume; else $('pdfBtn').remove();
  $('printBtn').addEventListener('click', function () { window.print(); });
  $('mailBtn').href = 'mailto:' + S.email;
  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('fName').value.trim(), m = $('fMail').value.trim(), msg = $('fMsg').value.trim(), err = $('formErr');
    if (!n || !msg || !/^\S+@\S+\.\S+$/.test(m)) { err.textContent = 'Please fill in your name, a valid email and a message.'; return; }
    err.textContent = '';
    window.location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent('Message from ' + n) + '&body=' + encodeURIComponent(msg + '\n\n— ' + n + ' (' + m + ')');
    toast('Opening your email app…');
  });
  $('footNote').textContent = S.footerNote || '';
})();
