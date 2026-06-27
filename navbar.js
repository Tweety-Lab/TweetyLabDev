const navbar = document.getElementById("navbar");

const prefix = window.location.pathname.startsWith("/portfolio/")
    ? ".."
    : ".";

navbar.innerHTML = await fetch(`${prefix}/navbar.html`).then(r => r.text());