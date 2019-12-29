let dom;

export function darkMode(d) {
   dom = d;
   const body = d.body;
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

export function setRipples() {
   const surface = document.querySelectorAll('.waves');

   function ripple(e) {
      let circle = document.createElement("div");
      let maxLarge = Math.max(this.clientWidth, this.clientHeight)
      let rectSurface = this.getBoundingClientRect();
      let time = (Math.log(maxLarge) / Math.log(Math.exp(1))) / 11;

      circle.style.width = circle.style.height = maxLarge + "px";
      circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + "px";
      circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + "px";
      circle.classList.add("ripple");
      circle.style.animation = `ripple ${time}s ease-in`;

      if (this.classList.contains("waves-dark")) circle.classList.add("ripple-dark");
      this.appendChild(circle);
      setTimeout(() => this.removeChild(circle), time * 1000);
   }

   for (let i = 0; i < surface.length; i++) surface[i].addEventListener('click', ripple);
}
