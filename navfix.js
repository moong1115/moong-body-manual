(function(){
  function showTab(id){
    var sections=document.querySelectorAll('.section');
    var buttons=document.querySelectorAll('#nav button');
    sections.forEach(function(s){s.classList.toggle('active',s.id===id)});
    buttons.forEach(function(b){b.classList.toggle('active',b.getAttribute('data-tab')===id)});
    var target=document.getElementById(id);
    if(target) target.scrollIntoView({behavior:'auto',block:'start'});
  }
  function init(){
    var nav=document.getElementById('nav');
    if(!nav) return;
    nav.addEventListener('click',function(e){
      var b=e.target.closest('button[data-tab]');
      if(!b) return;
      e.preventDefault();
      e.stopPropagation();
      showTab(b.getAttribute('data-tab'));
    },true);
    window.addEventListener('hashchange',function(){
      var id=location.hash.slice(1);
      if(document.getElementById(id)) showTab(id);
    });
    var id=location.hash.slice(1);
    if(document.getElementById(id)) showTab(id); else showTab('home');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
