const navbar = document.getElementById("navbar");

navbar.innerHTML = await fetch(`/navbar.html`).then(r => r.text());