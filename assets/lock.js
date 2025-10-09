(function () {
    // Check if already entered
    if (localStorage.getItem('siteAccessOK') === 'yes') return;
  
    // Ask for password
    const pass = prompt('Enter site password:');
    if (pass === 'audiology2025') {
      localStorage.setItem('siteAccessOK', 'yes');
    } else {
      document.documentElement.innerHTML = `
        <main style="max-width:42rem;margin:6rem auto;font-family:ui-sans-serif,system-ui;">
          <h1 style="font-size:1.5rem;margin-bottom:0.5rem;">Access denied</h1>
          <p>Incorrect password.</p>
        </main>`;
      throw new Error('Unauthorized');
    }
  })();