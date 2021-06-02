(()=>{"use strict";const e=()=>{let e=document.getElementById("content");const t=document.createElement("main"),n=document.createElement("div");n.setAttribute("id","logo");const i=document.createElement("img");i.setAttribute("src","https://www.rulli.com/images/header-logo.png"),i.setAttribute("alt","Emporio Rulli logo"),n.appendChild(i);const a=document.createElement("div");a.setAttribute("class","img-container");const d=document.createElement("img");d.setAttribute("src","https://www.rulli.com/userfiles/cms/banners/17/thumb_emporio-rulli-banner-cafe.jpg"),d.setAttribute("alt","Pastries"),a.appendChild(d);const o=document.createElement("div");o.setAttribute("id","description");const l=document.createElement("h2");l.append("Welcome to Emporio Rulli");const c=document.createElement("p");c.append("Emporio Rulli, the creation of Gary and Jeannie Rulli, is the classic Italian pastry, caffè and wine shop located – not in Italy – but in historic downtown Larkspur in Marin County, twenty minutes across the Golden Gate Bridge, North of San Francisco.");const r=document.createElement("p");r.append("Apprenticed to Pastry Chefs in Milan and Turin, Rulli returned to America determined to preserve their art. Since 1988 when Emporio Rulli was opened, Gary’s reputation as a Pastry Chef has spread across America. His Panettone, the traditional Milanese Christmas bread, is sent worldwide."),o.appendChild(l),o.appendChild(c),o.appendChild(r),t.appendChild(n),t.appendChild(a),t.appendChild(o),e.appendChild(t)},t=()=>{let e=document.getElementById("content");e.removeChild(e.childNodes[2]),console.log("clearing")};(()=>{let e=document.getElementById("content");const t=document.createElement("nav"),n=document.createElement("ul"),i=document.createElement("li");i.append("Home"),i.setAttribute("id","home");const a=document.createElement("li");a.append("Menu"),a.setAttribute("id","menu");const d=document.createElement("li");d.append("About"),d.setAttribute("id","about");const o=document.createElement("li");o.append("Find Us"),o.setAttribute("id","find-us"),n.appendChild(i),n.appendChild(a),n.appendChild(d),n.appendChild(o),t.appendChild(n),e.appendChild(t)})(),(()=>{let e=document.getElementById("content");const t=document.createElement("footer"),n=document.createElement("div");n.setAttribute("class","footer-container");const i=document.createElement("p");i.append("phone. 415-924-7478 • fax. 415-924-3474 • info@rulli.com");const a=document.createElement("p");a.append("© 2021 Emporio Rulli. All rights reserved. Bay Area Web Development."),n.appendChild(i),n.appendChild(a),t.appendChild(n),e.appendChild(t)})(),e(),document.getElementById("home").onclick=()=>{t(),e()},document.getElementById("menu").onclick=()=>{t(),(()=>{let e=document.getElementById("content");const t=document.createElement("div");let n;for(t.setAttribute("class","menu-grid"),e.appendChild(t),n=0;n<10;n++){const e=document.createElement("div");e.setAttribute("class","menu-item");const n=document.createElement("div");n.setAttribute("class","item-title"),n.append("Food Item");const i=document.createElement("div");i.setAttribute("class","item-desc"),i.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque gravida orci quis pharetra. Aliquam erat volutpat. Aenean pretium sodales fermentum. Fusce quis posuere dui. Maecenas dictum in orci sit amet maximus. Mauris placerat volutpat leo, non volutpat massa dignissim nec. Aliquam erat volutpat."),e.appendChild(n),e.appendChild(i),t.appendChild(e)}})()}})();