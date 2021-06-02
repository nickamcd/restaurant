const menu = () => {
  let content = document.getElementById('content');

  const menuGrid = document.createElement('div');
  menuGrid.setAttribute('class', 'menu-grid');
  
  content.appendChild(menuGrid);
  let i;
  for (i = 0; i < 10; i++) {
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class', 'menu-item');
    const itemTitle = document.createElement('div');
    itemTitle.setAttribute('class', 'item-title')
    itemTitle.append('Food Item');
    const itemDesc = document.createElement('div');
    itemDesc.setAttribute('class', 'item-desc');
    itemDesc.append('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque gravida orci quis pharetra. Aliquam erat volutpat. Aenean pretium sodales fermentum. Fusce quis posuere dui. Maecenas dictum in orci sit amet maximus. Mauris placerat volutpat leo, non volutpat massa dignissim nec. Aliquam erat volutpat.');
    
    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDesc);

    menuGrid.appendChild(menuItem);
  }
};

export default menu;