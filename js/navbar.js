fetch("navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;

    // Load products.js
    const p = document.createElement("script");
    p.src = "js/products.js";
    document.body.appendChild(p);

    // Load search.js (SAU navbar & sau products)
    p.onload = () => {
      const s = document.createElement("script");
      s.src = "js/search.js";
      document.body.appendChild(s);
    };

    console.log("Navbar loaded!");
  });
