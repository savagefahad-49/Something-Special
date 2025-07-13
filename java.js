alert("Fahad Welcomes You!");

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  setTimeout(() => {
  const text = document.createElement('div');
  text.className = 'floating-text';
  text.textContent = 'For Someone Special!!!🙂';
  document.body.appendChild(text);
}, 3500);
