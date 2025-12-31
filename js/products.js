//products.js

//Đây đơn giản là data của các sản phẩm, có thể làm trong html nhưng để dữ liệu ở đây sẽ tiện hơn vì không cần phải lặp lại các câu lệnh nếu có 1000 sản phẩm
//đây chỉ là fake data, mảng này gồm nhiều object, mỗi object sẽ có các thông tin khác nhau
const products = [
  {
    id: "1",
    name: "KEEP Purple",
    price: "1,500 HEHE",
    decs: "Shhh KEEP SILENT| SHIRT",
    size: ["S", "M", "L"],
    frontImg: "https://i.pinimg.com/736x/c2/37/1f/c2371fbb5c125826fe5b06722efee4ea.jpg",
    backImg: "https://i.pinimg.com/736x/b4/6e/45/b46e45dbcbee37ac0fb372f86f5e8143.jpg",
    images: [
      "./source/purple1.jpg",
      "./source/purple2.jpg",
      "./source/purple3.jpg",
      "./source/purple4.jpg",
    ]
  },
  {
    id: "2",
    name: "KEEP Blue",
    decs: "Shhh KEEP SILENT| SHIRT",
    price: "1,250 HEHE",
    size: ["S", "M", "L"],
    frontImg: "https://i.pinimg.com/736x/16/78/98/167898d7275e741aeb1850909cabc14c.jpg",
    backImg: "https://i.pinimg.com/736x/55/09/23/55092359fa89947e14ce77359296704d.jpg",
    images: [
      "./source/blue1.jpg",
      "./source/blue2.jpg",
      "./source/blue3.jpg",

    ]
  }
  ,
  {
    id: "3",
    name: "KEEP Black",
    price: "1,300 HEHE",
    decs: "Shhh KEEP SILENT| SHIRT",
    size: ["S", "M", "L"],
    frontImg: "https://i.pinimg.com/736x/99/43/cd/9943cd706b376fa7d8beff8bbc35ac0c.jpg",
    backImg: "https://i.pinimg.com/736x/8b/57/ce/8b57ce23cc2919cb4661f3f47ca1e892.jpg",
    images: [
      "./source/black1.jpg",
      "./source/black2.jpg",
      "./source/black3.jpg",
      "./source/black4.jpg",
    ]
  }
  ,
  {
    id: "4",
    name: "KEEP White",
    price: "1,900 HEHE",
    decs: "Shhh KEEP SILENT| SHIRT",
    size: ["S", "M", "L"],
    frontImg: "https://i.pinimg.com/736x/f4/e5/56/f4e556436aba4d31bfe9ae2ecf554747.jpg",
    backImg: "https://i.pinimg.com/736x/28/18/47/2818473e1a8dd2a75226e5c3723cfe09.jpg",
    images: [
      "./source/white1.jpg",
      "./source/white2.jpg",
      "./source/white3.jpg",
      "./source/white1.jpg",
    ]
  }
  ,
  {
    id: "5",
    name: "KEEP Wonder",
    price: "1,200 HEHE",
    decs: "Wonder| SHIRT",
    size: ["S", "M", "L"],
    frontImg: "./source/wonder1.jpg",
    backImg: "./source/wonder2.jpg",
    images: [
      "./source/wonder1.jpg",
      "./source/wonder2.jpg",
      "./source/wonder3.jpg",
    ]
  }
  ,
  {
    id: "8",
    name: "Woder glass",
    price: "4,730 HEHE",
    decs: "Shhh| Brighting",
    size: null,
    frontImg: "./source/ormglass.jpg",
    backImg: "./source/ormglass1.1.jpg",
    images: [
      "./source/ormglass.jpg",
      "./source/ormglass1.1.jpg",
      "./source/ormglass2.3.jpg",
        ]
  }
  ,
  {
    id: "9",
    name: "Woder glass",
    price: "4,600 HEHE",
    decs: "Shhh| Brighting",
    size: null,
    frontImg: "./source/ormglass2.1.jpg",
    backImg: "./source/ormglass2.2.jpg",
    images: [
      "source/ormglass2.1.jpg",
      "source/ormglass2.2.jpg",
      "source/ormglass1.2.jpg",
      "source/ormglass1.3.jpg",

    ]
  }
  ,
  {
    id: "10",
    name: "Ormlete Flower",
    price: "5,000 HEHE",
    decs: "Shhh| fragranting",
    size: null,
    frontImg: "source/ormflower1.1.jpg",
    backImg: "source/ormflower1.2.jpg",
    images: [
      "source/ormflower1.1.jpg",
      "source/ormflower1.2.jpg",
      "source/ormflower1.3.jpg",
      "source/ormflower1.4.jpg",
      "source/ormflower1.5.jpg",
    ]
  }
  ,
  {
    id: "11",
    name: "Ormlete Cloth",
    price: "7,500 HEHE",
    decs: "Shhh| Cooling",
    size: ["S", "M", "L"],
    frontImg: "source/ormcloth1.1.jpg",
    backImg: "source/ormcloth1.2.jpg",
    images: [
      "source/ormcloth1.1.jpg",
      "source/ormcloth1.2.jpg",
      "source/ormcloth1.3.jpg",
      "source/ormcloth1.4.jpg",
    ]
  }
  ,
  {
    id: "12",
    name: "Ormlete Shirt",
    price: "3,500 HEHE",
    decs: "Shhh| Whiting Short",
    size: ["S", "M", "L"],
    frontImg: "source/ormkeep1.2.jpg",
    backImg: "source/ormkeep1.jpg",
    images: [
      "source/ormkeep1.jpg",
      "source/ormkeep1.2.jpg",
      "source/ormkeep1.3.jpg",
    ]
  }
  ,
  {
    id: "13",
    name: "Ormlete Shirt",
    price: "3,000 HEHE",
    decs: "Shhh| fragranting",
    size: ["S", "M", "L"],
    frontImg: "source/ormshirt1.1.jpg",
    backImg: "source/ormshirt1.3.jpg",
    images: [
      "source/ormshirt1.1.jpg",
      "source/ormshirt1.2.jpg",
      "source/ormshirt1.3.jpg",
      "source/ormshirt1.4.jpg",
    ]
  }
  

];
//tất cả dữ liệu này sẽ được đưa sang trang html thông qua id, và đưa sang theo cấu trúc của product.js


//dòng này sẽ tìm đoạn html có id là products-list rồi sau đó nó sẽ truyền thông tin vào
const list = document.getElementById("products-list");

products.forEach(p => { //dòng này sẽ lặp qua từng sản phẩm trong mảng products tức là các giá trí ở trên
  //dòng này tức là nó sẽ thôm vào cuối nghĩa là các sản phẩm sẽ cứ được thêm vào sau sản phẩm trước và sẽ không đè lên nhau
  //phần này đơn giản là đưa các dữ liệu vào theo đúng yêu cầu á, có thể làm trong html nhưng sẽ dài hơn
  list.innerHTML += ` 

    <div class="products-item">
      <div class="img-wraps">
        <img class="front" onclick="goToDetail(${p.id})" src="${p.frontImg}" alt="${p.name} front">
        <img class="back" onclick="goToDetail(${p.id})" src="${p.backImg}" alt="${p.name} back">

        <div class="overlay">
       
          <div class="icon-circle" onclick="addToPopup(${p.id})"><i class="fa fa-plus"></i></div>
     
          <div class="icon-circle searching" onclick="goToDetail(${p.id})"><i class="fa fa-search"></i></div>
        
        </div>
      </div>


      <h4>${p.name}</h4>
      <p>${p.price}</p>
    </div>
  `;
    // div.querySelector(".add-popup").addEventListener("click", () => addToPopup(p.id));
    // div.querySelector(".go-detail").addEventListener("click", () => goToDetail(p.id));
    // div.querySelector(".front").addEventListener("click", () => goToDetail(p.id));
    // div.querySelector(".back").addEventListener("click", () => goToDetail(p.id));

    // list.appendChild(div);
});

function goToDetail(id) { //ở cái này file sẽ đọc lên id và hiển thị các thông tin theo form đã được set sẵn trong file js  
  window.location.href = `product.html?id=${id}`;
}


document.querySelectorAll(".add-cart").forEach(btn => { //đoạn này giống với các đoạn add to cart khác 
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const size = btn.dataset.size || null;
    const product = products.find(p => p.id == id);

    addToCart(product, size); // gọi chung
    window.location.href = "cart.html"; // nếu muốn mở trang giỏ hàng
  });
});





