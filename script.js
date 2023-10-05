(function() {

   'use strict';

   const converter = document.getElementById('convert');
   const answerEl = document.getElementById('answer');
   let conversionType = 'miles';

   document.addEventListener('keydown', (e) => {
      if (e.code === 'KeyK') {
         conversionType = 'kilometers';
         document.querySelector('h1').innerHTML = 'Kilometers to Miles converter';
         document.querySelector('p').innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.'
      } else if (e.code === 'KeyM') {
         conversionType = 'miles';
         document.querySelector('h1').innerHTML = 'Miles to kilometers converter';
         document.querySelector('p').innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
      }
   });

   converter.addEventListener('submit', onFormSubmit);

   function onFormSubmit(e) {
      e.preventDefault();

      const distance = parseFloat(document.getElementById('distance').value);

      if (distance) {
         if (conversionType === 'miles') {
            let conversion = (distance * 1.609344).toFixed(3);
            answerEl.innerHTML = `<h2>${distance} Miles converted to ${conversion} Kilometers</h2>`
         } else {
            let conversion = (distance * 0.621371192).toFixed(3);
            answerEl.innerHTML = `<h2>${distance} Kilometers converted to ${conversion} Miles</h2>`
         }
      } else {
         answerEl.innerHTML = `<h2>Please input a number!</h2>`
      }
   };
})();