const footer = () => {
  let content = document.getElementById('content');
  
  const footer = document.createElement('footer');

  const footerContainer = document.createElement('div');
  footerContainer.setAttribute('class', 'footer-container');

  const infoOne = document.createElement('p');
  infoOne.append('phone. 415-924-7478 • fax. 415-924-3474 • info@rulli.com');
  const infoTwo = document.createElement('p');
  infoTwo.append('© 2021 Emporio Rulli. All rights reserved. Bay Area Web Development.');

  footerContainer.appendChild(infoOne);
  footerContainer.appendChild(infoTwo);

  footer.appendChild(footerContainer);

  content.appendChild(footer);
};

export default footer;