let toggleButton = document.querySelector('.toggleButton');
let close = document.querySelector('.close');
let content = document.querySelector('.content');
let menu = document.querySelector('.menu');
let asside = document.querySelector('.asside');
let menuclos = document.querySelector('.menuclos');



toggleButton.onclick = function () {
    content.classList.add('active');

}
close.onclick = function () {
    content.classList.remove('active');
}

menu.onclick = function () {
    asside.classList.add('action');

}
menuclos.onclick = function () {
    asside.classList.remove('action');
}
 

let menu_1 = document.querySelector('.menu-1');
let color = document.querySelector('.colors');

let menuclose_1 = document.querySelector('.menuclose-1');



menu_1.onclick = function () {
    color.classList.add('active-1');

}
menuclose_1.onclick = function () {
    color.classList.remove('active-1');
}
// swich colors


    /// cart
 let cart_2 = document.querySelector('.cart_2');
 let openecart = document.querySelector('.opencart');
let closecart = document.querySelector('.closecart');



openecart.onclick = function () {
    cart_2.classList.add('active-cart');

}
closecart.onclick = function () {
    cart_2.classList.remove('active-cart');
}

     



////cart

if (document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", start);
}
else
{
    start();
}
function start()
{
    addEvent();
}

function update()
{
    addEvent();
    updatetotal();
}
//making functioj ready

function addEvent()
{
    let removeCartButton = document.querySelectorAll(".cart_remove");
    console.log(removeCartButton);
   removeCartButton.forEach((btn) =>
   {
        btn.addEventListener('click', removeCartItem);
   });
    //=========change qty========
    let cartqty = document.querySelectorAll(".quantity");
    cartqty.forEach(input =>
        {
            input.addEventListener("change", cart_changeqty);
        });


        ///====== add cart btn=====
        let cart_additem = document.querySelectorAll(".addtocart");
        console.log(cart_additem);
        cart_additem.forEach((btn) =>
        {
            btn.addEventListener('click', hanle_addcart);
        });
}
//=== additem
function hanle_addcart()
{
    
    let product = this.parentElement;
    let title = product.querySelector(".title-item").innerHTML;
    let price = product.querySelector(".price-item").innerHTML;
    let image = product.querySelector(".image-item").src;
   /* for (let i = 0; i < title.length; i++)
    {
        alert("you have already ass this item to cart");
    }*/
    console.log(title, price, image);

    let newAdd = {
        title,
        price,
        image,
    };

  let cartbaxelement = cartbaxelement(title,price,image);
    let newNod = document.createElement("div");
    newNod.innerHTML = cartbaxelement;
    const cartcontent = cart.querySelector(".content-item");
    cartcontent.appendChild(newNod);
}
// remove item
function removeCartItem()
{
   
    this.parentElement.remove();

    update();
}

function cart_changeqty()
{
    
    if (isNaN(this.value) || this.value < 1)
    {
       this.value = 1;
    }
 
      this.value = Math.floor(this.value);
    update();
}

function  updatetotal()
{
    let cartbox = document.querySelectorAll(".cart-menu");
    document.querySelector(".total").innerHTML = "$" +0+".00";
    let total = 0;
    cartbox.forEach((cartboxs) =>
        {
        let priceElament = cartboxs.querySelector(".new-price");
        let price = parseFloat(priceElament.innerHTML.replace("$", ""));
        let qty = cartboxs.querySelector(".quantity").value;
        total += price*qty;
    });
    document.querySelector(".total").innerHTML = "$" +total+".00";
}

//////// cart box componnents
function cartbaxelement(title,price,image)
{
return`
    
     <div class="cart-menu action">
         <div class="cart-img"> 
           <img src=${image} alt=""> 
           </div> <div class="cart-des">
             <div class="cart-name">
                 <span>${title} </span>
                   </div>  <div class="cart-price">  
                      <span class="price">price:</span>
                     <span class="first cart-price new-price">${price}</span>  
                     <div class="qty"><button>-</button><input type="number" value="1" class="quantity">
            <button>+</button></div>  </div> 
             </div> <i class="fas fa-trash cart_remove"></i></div> `

}
