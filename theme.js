// theme.js — small theme manager used by all pages
// - toggles dark/light by setting data-theme="dark" on <html>
// - persists selection in localStorage under 'theme'
// - fills the current year in the footer element with id="year"

(function(){
  // set year in footer (if present)
  try{ const el = document.getElementById('year'); if(el) el.textContent = new Date().getFullYear(); }catch(e){}

  // find theme switch checkbox (uses class .theme-switch-input)
  const input = document.querySelector('.theme-switch-input');
  const stored = localStorage.getItem('theme');
  // apply stored theme
  if(stored === 'dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.removeAttribute('data-theme');

  if(!input) return;
  // checkbox checked === dark mode
  input.checked = document.documentElement.getAttribute('data-theme') === 'dark';
  input.addEventListener('change', ()=>{
    const isDark = input.checked;
    if(isDark) document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
})();
