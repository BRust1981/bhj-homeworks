'use strict';

function dec(){
  let countField = this.closest('.product__quantity-controls').querySelector('.product__quantity-value');
  if(countField.innerText > 1){
    countField.innerText = Number(countField.innerText) - 1;
  }
}

function inc(){
  let countField = this.closest('.product__quantity-controls').querySelector('.product__quantity-value');
  countField.innerText = Number(countField.innerText) + 1;
}

function productNode(id, image, quantity){
  let productNode = document.createElement('div');
  productNode.classList.add('cart__product');
  productNode.dataset['id'] = id;
  productNode.innerHTML = `    <img class="cart__product-image" src="${image}">
  <div class="cart__product-count">${quantity}</div>
  `;
  return productNode;
}

function addToBasket(){
  let product = this.closest('.product');
  let productQuantity = Number(product.querySelector('div.product__quantity-value').textContent);
  let productImage = product.querySelector('img.product__image').src;
  let cart = document.querySelector('div.cart__products');
  let productExist = Array.from(cart.children).find(el => el.dataset['id'] == product.dataset['id']);       //Не строго чтобы не преобразовывать типы

  if(productExist){
    let productExistQuantity = Number(productExist.querySelector('.cart__product-count').textContent);
    cart.replaceChild(productNode(product.dataset['id'], productImage, productQuantity + productExistQuantity), productExist);
  } else{
    cart.appendChild(productNode(product.dataset['id'], productImage, productQuantity));
  }
}

const addToBasketButtons = document.querySelectorAll('div.product__add');
Array.from(addToBasketButtons).map(el => el.onclick = addToBasket);

const decButtons = document.querySelectorAll('div.product__quantity-control_dec');
Array.from(decButtons).map(el => el.onclick = dec);

const incButtons = document.querySelectorAll('div.product__quantity-control_inc');
Array.from(incButtons).map(el => el.onclick = inc);
