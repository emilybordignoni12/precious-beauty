const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.querySelectorAll('[data-service]').forEach(link => {
  const message = `Olá, Emily! Conheci seu site e tenho interesse em ${link.dataset.service}. Gostaria de consultar disponibilidade. Data do evento: ___. Horário em que preciso estar pronta: ___. Local: ___.`;
  link.href = `https://wa.me/5517996649423?text=${encodeURIComponent(message)}`;
  link.target = '_blank'; link.rel = 'noopener noreferrer';
});
const mirror = document.querySelector('#mirror');
const frame = document.querySelector('.mirror-frame');
function showFrame() { if (frame.naturalWidth) mirror.classList.add('asset-ready'); }
frame.addEventListener('load', showFrame); showFrame();
