console.log("Search.js loaded!");

const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

if (!searchIcon || !searchBox) {
  console.warn("Search not available on this page");
} else {

  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBox.classList.toggle("show");
    if (searchBox.classList.contains("show")) {
      searchInput.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target) && !e.target.closest("#search-icon")) {
      searchBox.classList.remove("show");
    }
  });

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (keyword === "") return;

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(keyword)
    );

    filtered.forEach(product => {
      const item = document.createElement("div");
      item.innerHTML = `<strong>${product.name}</strong> — ${product.price}`;
      item.onclick = () => {
        window.location.href = "product.html?id=" + product.id;
      };
      searchResults.appendChild(item);
    });
  });
}
