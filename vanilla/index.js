(() => {
  const p = document.createElement('p');
  const textNode = document.createTextNode("It works!");
  p.appendChild(textNode);
  document.body.appendChild(p);
})();