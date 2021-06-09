import nav from './nav';
import home from './home';
import menu from './menu';
import about from './about';
import footer from './footer';
import clear from './clear';
import findUs from './find_us';

nav();
footer();
home();

let homeTab = document.getElementById('home');
homeTab.onclick = () => {
  clear();
  home();
};

let menuTab = document.getElementById('menu');
menuTab.onclick = () => {
  clear();
  menu();
};

let aboutTab = document.getElementById('about');
aboutTab.onclick = () => {
  clear();
  about();
};

let findUsTab = document.getElementById('find-us');
findUsTab.onclick = () => {
  clear();
  findUs();
};