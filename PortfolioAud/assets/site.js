
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // Active nav by pathname
    var path = location.pathname.split('/').pop() || 'about.html';
    document.querySelectorAll('a[data-nav]').forEach(function(a){
      if (a.getAttribute('href') === path) a.classList.add('bg-slate-100');
    });
    // Mobile menu toggle
    var menuBtn = document.getElementById('menuBtn');
    var menu = document.getElementById('menu');
    if (menuBtn && menu){
      menuBtn.addEventListener('click', function(){ menu.classList.toggle('hidden'); });
    }
    // Year
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
    // Contact mailto builder (only on contact page)
    var mailtoCTA = document.getElementById('mailtoCTA');
    if (mailtoCTA){
      mailtoCTA.addEventListener('click', function(e){
        var name = (document.getElementById('name').value || '').trim();
        var from = (document.getElementById('email').value || '').trim();
        var msg  = (document.getElementById('message').value || '').trim();
        var subject = encodeURIComponent('Portfolio inquiry' + (name ? ' – ' + name : ''));
        var body = encodeURIComponent(msg + '\n\n— ' + name + (from ? ' (' + from + ')' : ''));
        var toLink = document.querySelector('a[href^="mailto:"]');
        var to = toLink ? toLink.getAttribute('href').replace('mailto:','') : 'your@email.com';
        mailtoCTA.setAttribute('href', 'mailto:' + to + '?subject=' + subject + '&body=' + body);
      });
    }
  });
})();