let dom;

export function darkMode(d) {
   const body = d.body;
   dom = d;
   body.style.setProperty('--primary', '#555');
   body.style.setProperty('--four', '#1B5E20');
   body.style.setProperty('--third', '#880E4F');
   body.style.setProperty('--backgrounds', '#eee');
   body.style.setProperty('--five', '#BF360C');
   body.style.setProperty('--secondary', '#FBC02D');
   body.style.setProperty('--blue', '#1565C0');
}

export function changeTheme(color) {
   const metaThemeColor = dom.querySelector("meta[name=theme-color]");
   metaThemeColor.setAttribute("content", color);
}
