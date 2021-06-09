const findUs = () => {
  let content = document.getElementById('content');

  const findUs = document.createElement('main');

  const logoDiv = document.createElement('div');
  logoDiv.setAttribute('id', 'logo');

  const logo = document.createElement('img');
  logo.setAttribute('src', 'https://www.rulli.com/images/header-logo.png');
  logo.setAttribute('alt', 'Emporio Rulli logo');

  logoDiv.appendChild(logo);

  const subtitle = document.createElement('h2');
  subtitle.append('Locations');

  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'img-container');
  const imgOne = document.createElement('img');
  imgOne.setAttribute('src', 'https://www.rulli.com/userfiles/cms/subpage/images/7/thumb_emporio-rulli-larkspur-location-web.jpg');
  imgOne.setAttribute('alt', 'Larkspur Store');

  imgContainer.appendChild(imgOne);

  const linkOne = document.createElement('a');
  linkOne.append('Larkspur');
  linkOne.setAttribute('href', 'https://www.rulli.com/locations/larkspur');
  imgContainer.appendChild(linkOne);

  const imgTwo = document.createElement('img');
  imgTwo.setAttribute('src', 'https://www.rulli.com/userfiles/cms/subpage/images/10/thumb_ristobar-interior-signage.jpg');
  imgTwo.setAttribute('alt', 'Ristobar Store');

  imgContainer.appendChild(imgTwo);

  const linkTwo = document.createElement('a');
  linkTwo.append('Ristobar');
  linkTwo.setAttribute('href', 'https://www.rulli.com/locations/ristobar');
  imgContainer.appendChild(linkTwo);

  findUs.appendChild(logoDiv);
  findUs.appendChild(subtitle);
  findUs.appendChild(imgContainer);

  content.appendChild(findUs);
};

export default findUs;