// ==============================
// LẤY ID SẢN PHẨM TỪ URL
// ==============================
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Tìm sản phẩm trong products.js
const product = products.find(p => p.id === id);

if (!product) {
  document.body.innerHTML = "<h1>Không tìm thấy sản phẩm</h1>";
}



// ==============================
// HIỂN THỊ THÔNG TIN SẢN PHẨM
// ==============================
document.getElementById("name").innerText = product.name;
document.getElementById("price").innerText = product.price;
document.getElementById("decs").innerText = product.decs;



// ==============================
// HIỂN THỊ ẢNH THUMBNAIL
// ==============================
const thumbBox = document.getElementById("thumbs");

product.images.forEach(img => {
  thumbBox.innerHTML += `
    <img src="${img}" class="thumb" onclick="document.getElementById('image').src='${img}'">
  `;
});

// document.getElementById("image").src = product.images[0];



// ==============================
// XỬ LÝ SIZE (NẾU CÓ)
// ==============================
let selectedSize = null;

if (product.size && product.size.length > 0) {

  // Có size → giữ nguyên UI chọn size
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", function () {

      document.querySelectorAll(".size-btn").forEach(b => {
        b.classList.remove("selected");
      });

      this.classList.add("selected");

      selectedSize = this.dataset.size;
      console.log("Chọn size:", selectedSize);
    });
  });

} else {
  // Không có size → ẩn UI size
  const sizePicker = document.querySelector(".size-picker");
  if (sizePicker) sizePicker.style.display = "none";
}



// ==============================
// QUANTITY + / -
// ==============================
let quantity = 1;
const qtyValue = document.getElementById("qty-value");
const btnMinus = document.querySelector(".qty-btn.minus");
const btnPlus = document.querySelector(".qty-btn.plus");

btnMinus.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    qtyValue.innerText = quantity;
  }
});

btnPlus.addEventListener("click", () => {
  quantity++;
  qtyValue.innerText = quantity;
});



// ==============================
// ADD TO CART
// ==============================
const addToCartBtn = document.getElementById("add-cart");

addToCartBtn.addEventListener("click", () => {

  // Nếu sản phẩm có size nhưng người dùng chưa chọn size
  if (product.size && product.size.length > 0 && !selectedSize) {
    alert("Please select a size!");
    return;
  }

  // Gọi hàm addToCart từ cart.js
  addToCart(product, selectedSize, quantity);

  // Chuyển sang trang giỏ hàng
  window.location.href = "cart.html";
});
