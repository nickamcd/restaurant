const home = () => {
  let content = document.getElementById('content');

  const home = document.createElement('main');

  const logoDiv = document.createElement('div');
  logoDiv.setAttribute('id', 'logo');

  const logo = document.createElement('img');
  logo.setAttribute('src', 'https://www.rulli.com/images/header-logo.png');
  logo.setAttribute('alt', 'Emporio Rulli logo');

  logoDiv.appendChild(logo);

  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'img-container');

  const img = document.createElement('img');
  img.setAttribute('src', 'https://www.rulli.com/userfiles/cms/banners/17/thumb_emporio-rulli-banner-cafe.jpg');
  img.setAttribute('alt', 'Pastries');

  imgContainer.appendChild(img);

  const description = document.createElement('div');
  description.setAttribute('id', 'description');
  const greeting = document.createElement('h2');
  greeting.append('Welcome to Emporio Rulli');
  const paraOne = document.createElement('p');
  paraOne.append('Emporio Rulli, the creation of Gary and Jeannie Rulli, is the classic Italian pastry, caffè and wine shop located – not in Italy – but in historic downtown Larkspur in Marin County, twenty minutes across the Golden Gate Bridge, North of San Francisco.');
  const paraTwo = document.createElement('p');
  paraTwo.append('Apprenticed to Pastry Chefs in Milan and Turin, Rulli returned to America determined to preserve their art. Since 1988 when Emporio Rulli was opened, Gary’s reputation as a Pastry Chef has spread across America. His Panettone, the traditional Milanese Christmas bread, is sent worldwide.');

  description.appendChild(greeting);
  description.appendChild(paraOne);
  description.appendChild(paraTwo);

  home.appendChild(logoDiv);
  home.appendChild(imgContainer);
  home.appendChild(description);

  content.appendChild(home);
};

export default home;