(() => {
  const hashTrigger = '#88';
  const targetHTML = '88.html';
  const containerId = 'image-container';
  function injectHTML(file) {
    fetch(`img/${file}`)
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = html;
      })
      .catch(err => {
        console.error(`Error loading ${file}:`, err);
      });
  }
  function evaluateHash() {
    if (window.location.hash === hashTrigger) {
      injectHTML(targetHTML);
    }
  }
  window.addEventListener('hashchange', evaluateHash);
  evaluateHash();
})();
