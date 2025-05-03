
//get array of add to cart buttoms fron cards
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
//get list of items in the shopping cart in the top of page 
var cartItemsList = document.getElementById('cart-items');
//to show the total price
var totalPriceElement = document.getElementById('total-price');

// for elements and total price in modal
var modalCartItemsList = document.getElementById('modal-cart-items');
var modalTotalPriceElement = document.getElementById('modal-total-price');

var totalPrice = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    //get the closest card
    var card = button.closest('.card');
    //get the product name
    var name = card.querySelector('.product-name').textContent;
    //get the price
    var price = parseFloat(card.querySelector('.product-price').dataset.price);


    //  Confirmation prompt
    var confirmed = window.confirm('Are you sure you want to add ' + name + ' to your cart?');

    if (!confirmed) return; //  User cancelled

    // Add item to cart list

    //create li element
    var li = document.createElement('li');
    //add content to li
    li.textContent = name + " : " + price;
    // add class to li
    li.className = 'list-group-item';
    // append new li to ul
    cartItemsList.appendChild(li);

    //create li element for modal
    var li = document.createElement('li');
    li.textContent = name + " : " + price;
    li.className = 'list-group-item';
    modalCartItemsList.appendChild(li);

    // 4. Update total price in main page and modal`    
    totalPrice += +(price);
    totalPriceElement.textContent = totalPrice;
    modalTotalPriceElement.textContent = totalPrice;
  });
});