// Код, который доступны данные из localStorage
const cartSide = document.querySelector(".cart_base_left");
const cartSummCounts = document.querySelector(".cart_summ_count");
let Summ = 0;
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");

if (cartStorage.length) {
  cartStorage.forEach(el => {
    const { img, name, art, price } = el;
    const newCart = document.createElement("div");
    newCart.className = "cart_base_left_item";
    newCart.id = "cart_base_id";

    const imgElement = document.createElement("img");
    imgElement.src = img;
    imgElement.className = "Items1";
    imgElement.id = "img_block";
    imgElement.setAttribute("style", "width:175px; height:150px;");
    newCart.appendChild(imgElement);

    const textElement = document.createElement("div");
    textElement.className = "cart_base_left_item_text";
    textElement.innerHTML = `
      <div class="cart_name_item" >
        <p class="cart_name_item_p">${name}</p>
        <p class="cart_name_item_p">${art}</p>
      </div>
      <p class="cart_name_item_p">${price}</p>
    `;
   
    
    const deleteElement = document.createElement("div");
    deleteElement.className = "deleteBtnDiv"
    deleteElement.innerHTML = `
    <a class = "delete_btn_a" style="height:25px" id="deleteElement">
     <img src="img/deletebtn.png" 
     alt="cart" class="cart" 
     style="height:25px; weight:25px;" />
    </a>
    `;

    newCart.appendChild(textElement);
    newCart.appendChild(deleteElement);
    cartSide.appendChild(newCart);
    Summ += Number(price.split("руб.")[0].split(" ").join(""));
     
  });
}
cartSummCounts.innerHTML = Summ+" руб.";

let buttonss = document.querySelector(".cart_rectangle_content_btn");
  buttonss.addEventListener('click', function() {
    alert(`Ваш заказ сформирован. Осталось только оплатить ${Summ+" руб."}`);
  });

  let deleteBtn = document.querySelectorAll('.delete_btn_a');
deleteBtn.forEach((el, indx) => {
  el.addEventListener('click', function() {
    // Удаляем элемент из localStorage
    cartStorage.splice(indx, 1);
    localStorage.setItem('cart', JSON.stringify(cartStorage));

    // Удаляем элемент из DOM
    el.parentElement.parentElement.remove();

    // Обновляем сумму заказа
    Summ = 0;
    cartStorage.forEach(item => {
      Summ += Number(item.price.split("руб.")[0].split(" ").join(""));
    });
    cartSummCounts.innerHTML = Summ + " руб.";
  });
});