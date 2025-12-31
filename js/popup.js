// popup.js
document.addEventListener("DOMContentLoaded", () => {
  const sizePopup = document.getElementById("size-popup");
  const popupName = document.getElementById("popup-name");
  const popupPrice = document.getElementById("popup-price");
  const popupSizesDiv = document.getElementById("popup-sizes");
  const closeBtn = document.getElementById("close-size-popup");
  const addToCartBtn = document.getElementById("add-cart");
  const buyNowBtn = document.getElementById("buy-now");

  let popupSelectedSize = null;
  let currentProduct = null;

  // ================================
  // MỞ POPUP HOẶC ADD THẲNG
  // ================================
  window.addToPopup = function(id) {
    currentProduct = products.find(p => p.id == id);
    if (!currentProduct) return;

    // Nếu sản phẩm KHÔNG có size → không cần popup → add trực tiếp
    if (!currentProduct.size || currentProduct.size.length === 0) {
      addToCart(currentProduct, null, 1);
      window.location.href = "cart.html";
      return;
    }

    // ==========================================
    // NGƯỢC LẠI → CÓ SIZE → MỞ POPUP BÌNH THƯỜNG
    // ==========================================
    popupName.textContent = currentProduct.name;
    popupPrice.textContent = currentProduct.price;

    popupSizesDiv.innerHTML = "";
    popupSelectedSize = null;

    popupSizesDiv.style.display = "flex";
    document.querySelector(".type").style.display = "block";

    currentProduct.size.forEach(size => {
      const btn = document.createElement("button");
      btn.textContent = size;

      btn.addEventListener("click", () => {
        Array.from(popupSizesDiv.children).forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        popupSelectedSize = size;
      });

      popupSizesDiv.appendChild(btn);
    });

    sizePopup.style.display = "flex";
  };

  // ================================
  // ĐÓNG POPUP
  // ================================
  closeBtn.addEventListener("click", () => {
    sizePopup.style.display = "none";
    popupSelectedSize = null;
  });

  window.addEventListener("click", e => {
    if (e.target === sizePopup) {
      sizePopup.style.display = "none";
      popupSelectedSize = null;
    }
  });

  // ================================
  // NÚT ADD TO CART TRONG POPUP
  // ================================
  addToCartBtn.addEventListener("click", () => {
    if (!currentProduct) return;

    // Nếu sản phẩm có size nhưng chưa chọn → báo lỗi
    if (currentProduct.size && currentProduct.size.length > 0 && !popupSelectedSize) {
      alert("Please select a size!");
      return;
    }

    // Ngược lại → thêm vào giỏ
    addToCart(currentProduct, popupSelectedSize || null, 1);

    window.location.href = "cart.html";
  });

  // ================================
  // BUY NOW
  // ================================
  buyNowBtn.addEventListener("click", () => {
    if (!currentProduct) return;

    alert(`Buying ${currentProduct.name} (${popupSelectedSize || "No size"}) for ${currentProduct.price}`);
  });
});
