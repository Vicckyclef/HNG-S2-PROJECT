const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      window.location.href = 'cart.html';
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const decreaseButton = document.getElementById('decrease-quantity');
    const increaseButton = document.getElementById('increase-quantity');
    const quantityInput = document.getElementById('quantity-input');
  
    decreaseButton.addEventListener('click', function () {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    increaseButton.addEventListener('click', function () {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  
    quantityInput.addEventListener('change', function () {
      if (quantityInput.value < 1) {
        quantityInput.value = 1;
      }
    });
  });
  
  document.querySelector('.btn-primary').onclick = function() {
    document.getElementById('overlay-bg').style.display = 'flex';
}
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('overlay-bg').style.display = 'none';
}