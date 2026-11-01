/* Builds the page from content.js. You normally don't need to edit this file. */
(function () {
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function toast(msg) { var t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('show'); }, 2600); }
  function link(label, url, cls) {
    var a = el('a', cls, label);
    if (url === 'demo') { a.href = '#'; a.addEventListener('click', function (e) { e.preventDefault(); toast('Demo link: in a real portfolio this opens ' + label + '.'); }); }
    else { a.href = url; if (/^https?:/.test(url)) { a.target = '_blank'; a.rel = 'noopener'; } }
    return a;
  }

  var c = S.colors || {};
  var root = document.documentElement.style;
  if (c.accent) { root.setProperty('--accent', c.accent); document.querySelector('meta[name=theme-color]').content = c.accent; }
  if (c.accentSoft) root.setProperty('--accent-soft', c.accentSoft);

  document.querySelectorAll('[data-bind=name]').forEach(function (n) { n.textContent = S.name; });
  $('hName').textContent = S.name;
  $('hRole').textContent = S.role;
  $('hIntro').textContent = S.intro;
  if (S.openToWork) $('openToWork').textContent = S.openToWork; else $('openToWork').remove();
  if (S.resume) $('resumeBtn').href = S.resume; else $('resumeBtn').remove();

  var ph = $('photo');
  if (S.photo) { var img = el('img'); img.src = S.photo; img.alt = 'Photo of ' + S.name; img.width = 680; img.height = 680; img.onerror = function () { img.remove(); ph.appendChild(el('div', 'initials', S.name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2))); }; ph.appendChild(img); }
  else { var ini = el('div', 'initials', S.name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2)); ini.setAttribute('aria-hidden', 'true'); ph.appendChild(ini); }

  (S.socials || []).forEach(function (s) { var li = el('li'); li.appendChild(link(s.label, s.url)); $('socials').appendChild(li); });
  (S.about || []).forEach(function (p) { $('aboutText').appendChild(el('p', null, p)); });
  (S.stats || []).forEach(function (s) { var d = el('div'); d.appendChild(el('dt', null, s.value)); d.appendChild(el('dd', null, s.label)); $('stats').appendChild(d); });
  (S.skills || []).forEach(function (g) {
    var box = el('div', 'skill'); box.appendChild(el('h4', null, g.group));
    var ul = el('ul', 'chips'); g.items.forEach(function (i) { ul.appendChild(el('li', null, i)); });
    box.appendChild(ul); $('skills').appendChild(box);
  });
  (S.projects || []).forEach(function (p) {
    var card = el('article', 'card');
    var th = el('div', 'thumb'); th.setAttribute('aria-hidden', 'true');
    th.style.background = 'linear-gradient(135deg,' + p.color + ',color-mix(in srgb,' + p.color + ' 55%,#000))';
    var win = el('span', 'win'); win.style.color = p.color; for (var k = 0; k < 4; k++) win.appendChild(el('i')); th.appendChild(win);
    card.appendChild(th);
    var b = el('div', 'card-body');
    b.appendChild(el('p', 'tag', p.tag)); b.appendChild(el('h3', null, p.title)); b.appendChild(el('p', null, p.desc));
    var ul = el('ul', 'tech'); (p.tech || []).forEach(function (t) { ul.appendChild(el('li', null, t)); }); b.appendChild(ul);
    var ls = el('div', 'card-links');
    if (p.code) ls.appendChild(link('Code →', p.code));
    if (p.live) ls.appendChild(link('Live demo →', p.live));
    if (ls.children.length) b.appendChild(ls);
    card.appendChild(b); $('projectList').appendChild(card);
  });
  function timeline(list, target, withPoints) {
    (list || []).forEach(function (x) {
      var li = el('li'); li.appendChild(el('span', 'when', x.when)); li.appendChild(el('h4', null, x.title)); li.appendChild(el('p', 'org', x.org));
      if (x.note) li.appendChild(el('p', 'org', x.note));
      if (withPoints && x.points) { var ul = el('ul'); x.points.forEach(function (p) { ul.appendChild(el('li', null, p)); }); li.appendChild(ul); }
      $(target).appendChild(li);
    });
  }
  timeline(S.experience, 'exp', true); timeline(S.education, 'edu', false);
  (S.achievements || []).forEach(function (a) { $('ach').appendChild(el('li', null, a)); });

  var C = S.contact || {};
  $('cHeading').textContent = C.heading || 'Contact';
  $('cText').textContent = C.text || '';
  $('cEmail').textContent = S.email; $('cEmail').href = 'mailto:' + S.email;
  $('copyBtn').addEventListener('click', function () {
    var done = function () { toast('Email copied'); };
    if (navigator.clipboard) navigator.clipboard.writeText(S.email).then(done, function () { toast(S.email); }); else toast(S.email);
  });
  $('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('fName').value.trim(), m = $('fMail').value.trim(), msg = $('fMsg').value.trim(), err = $('formErr');
    if (!n || !msg || !/^\S+@\S+\.\S+$/.test(m)) { err.textContent = 'Please fill in your name, a valid email and a message.'; return; }
    err.textContent = '';
    var body = msg + '\n\n— ' + n + ' (' + m + ')';
    window.location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent('Portfolio message from ' + n) + '&body=' + encodeURIComponent(body);
    toast('Opening your email app…');
  });
  $('footNote').textContent = S.footerNote || '';
  $('year').textContent = new Date().getFullYear();

  var tb = $('themeBtn');
  if (S.darkModeToggle === false) tb.remove();
  else {
    if (!document.documentElement.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark';
    tb.addEventListener('click', function () {
      var d = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = d; try { localStorage.setItem('theme', d); } catch (e) {}
    });
  }
  document.title = S.name + ' · Portfolio';
})();
