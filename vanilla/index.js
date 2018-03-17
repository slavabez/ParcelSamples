import { dummyAction } from './src/DummyPromise';

(() => {
  const p = document.createElement('p');
  const textNode = document.createTextNode("It works!");
  p.appendChild(textNode);
  document.body.appendChild(p);

  dummyAction().then(result => {
    alert(`Loaded: ${result.message}, `);
  });

})();