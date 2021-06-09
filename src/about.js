const about = () => {
  let content = document.getElementById('content');

  const about = document.createElement('main');
  
  const logoDiv = document.createElement('div');
  logoDiv.setAttribute('id', 'logo');

  const logo = document.createElement('img');
  logo.setAttribute('src', 'https://www.rulli.com/images/header-logo.png');
  logo.setAttribute('alt', 'Emporio Rulli logo');

  logoDiv.appendChild(logo);

  const descDiv = document.createElement('div');
  descDiv.setAttribute('id', 'description');

  const heading = document.createElement('h2');
  heading.append('About Emporio Rulli');
  
  const paraOne = document.createElement('p');
  paraOne.append('The Emporio Rulli concept is about creating a genuine, authentic Italian coffee and pastry bar experience for our guests in the San Francisco Bay Area.');
  const paraTwo = document.createElement('p');
  paraTwo.append('As a 4th generation native San Franciscan whose grandparents and great grandparents emigrated to the San Francisco Bay Area in the early 20th century, we have, for the past 33 years, been ambassadors of Italian culture and gastronomy.  Everything you see in our beautiful, Italian-designed show cases is made 365 days a year in our pastry and savory kitchen in Larkspur.  Our selection of artisan handmade pastries, breads, paninis, macarons, salads and handcrafted coffees are all unique and authentic and are only found in our family run operation.');
  const paraThree = document.createElement('p');
  paraThree.append('Being the only Italian American inducted into AMPI, Accademia Maestri Pasticceria Italiana (Italian Pastry Masters Academy) in Brescia, Italy, keeps us in the forefront of all the latest pastry, coffee and food trends as well as centuries’ old traditions to surprise and delight our customers on a daily basis.  Our coffee is roasted bi-weekly in our roasting plant by Chef Rulli himself, having been trained by Alfred Peet (well-known as the creator of the artisan coffee movement as well as the founder of Peets Coffee & Tea).');
  const paraFour = document.createElement('p');
  paraFour.append('We are unique in the Bay Area for both roasting coffee and producing all of our products in house, setting us apart from all of our competitors.');

  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'img-container');

  const img = document.createElement('img');
  img.setAttribute('src', 'https://www.rulli.com/userfiles/cms/tiles/9/thumb_tile-order-online.jpg');
  img.setAttribute('alt', 'Specialty Cookies');

  imgContainer.appendChild(img);

  descDiv.appendChild(heading);
  descDiv.appendChild(paraOne);
  descDiv.appendChild(paraTwo);
  descDiv.appendChild(paraThree);
  descDiv.appendChild(paraFour);

  about.appendChild(logoDiv);
  about.appendChild(descDiv);
  about.appendChild(imgContainer);

  content.appendChild(about);
};

export default about;