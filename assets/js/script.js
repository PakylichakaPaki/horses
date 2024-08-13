// Код, который сохраняет данные в localStorage
const blocks = document.querySelector(".block");
const item = document.querySelectorAll(".Name_Items");

const img = blocks.childNodes[1];
const itm = blocks.childNodes[3];
let imgSrc = img.getAttribute("src");

  item.forEach((el, idx) => {
    const name = el.childNodes[1].innerText;
    const art = el.childNodes[3].innerText;
    const price = el.childNodes[7].innerText;
    const btn = el.childNodes[9];

    btn.addEventListener("click", () => {
      const cartstorage = localStorage.getItem("cart") || "[]";
      const cart = JSON.parse(cartstorage);
      if(cart.length > 3){
        return alert("В корзине больше 4-ex товаров");
      }
      const card = { img: imgSrc, name, art, price }; // Сохраняем только src изображения
      if (cart.includes(card)){
        return alert("Такой товар уже есть в корзине");
      }
      console.log(JSON.stringify([...cart, card]));
      localStorage.setItem("cart", JSON.stringify([...cart, card]));
    });
  });



  




  