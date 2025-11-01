
  function loadImageFromHTML() {
    fetch('img/i9T9g.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }

  if (window.location.hash === '#i9T9g) {
    loadImageFromHTML();
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#i9T9g') {
      loadImageFromHTML();
    } else {
      document.getElementById('image-container').innerHTML = ''; // Optional: clear on other hash
    }
  });



