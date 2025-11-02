(function(){
  const toggle=document.querySelector('.nav-toggle'); const nav=document.getElementById('primary-nav');
  if(toggle&&nav){ toggle.addEventListener('click',()=>{ const exp=toggle.getAttribute('aria-expanded')==='true'; toggle.setAttribute('aria-expanded', String(!exp)); nav.classList.toggle('active');}); }
  document.querySelectorAll('.nav-links > li > a').forEach(a=>{ a.addEventListener('keydown',e=>{ if(e.key==='ArrowDown'){ const m=a.parentElement.querySelector('.submenu'); if(m){ m.style.display='block'; m.querySelector('a')?.focus(); }}});});
  const toast=document.querySelector('.toast'); if(toast){ setTimeout(()=>toast.classList.add('show'),600); setTimeout(()=>toast.classList.remove('show'),4800); }
  const openModal=document.querySelector('[data-open-modal]'); const backdrop=document.querySelector('.modal-backdrop'); const closeBtn=document.querySelector('.modal-close');
  if(openModal&&backdrop){ openModal.addEventListener('click',()=>backdrop.classList.add('show')); }
  if(closeBtn&&backdrop){ closeBtn.addEventListener('click',()=>backdrop.classList.remove('show')); }
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&backdrop&&backdrop.classList.contains('show')){ backdrop.classList.remove('show'); }});
})();
