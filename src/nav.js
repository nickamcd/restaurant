const nav = () => {
  let content = document.getElementById('content');

  const navbar = document.createElement('nav');
  const list = document.createElement('ul');

  const homeLi = document.createElement('li');
  homeLi.append("Home");
  homeLi.setAttribute('id', 'home');
  const menuLi = document.createElement('li');
  menuLi.append("Menu");
  menuLi.setAttribute('id', 'menu');
  const aboutLi = document.createElement('li');
  aboutLi.append("About");
  aboutLi.setAttribute('id', 'about');
  const findusLi = document.createElement('li');
  findusLi.append("Find Us");
  findusLi.setAttribute('id', 'find-us');

  list.appendChild(homeLi);
  list.appendChild(menuLi);
  list.appendChild(aboutLi);
  list.appendChild(findusLi);

  navbar.appendChild(list);

  content.appendChild(navbar);
};

export default nav;