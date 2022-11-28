
Array.from(document.body.querySelectorAll('.product__quantity-control_dec')).forEach( product => {
    product.addEventListener('click', productDec);
})

Array.from(document.body.querySelectorAll('.product__quantity-control_inc')).forEach( product => {
    product.addEventListener('click', productInc);
})

Array.from(document.body.querySelectorAll('.product__add')).forEach(product => {
    product.addEventListener('click', productAdd);
})

function productInc(env) {
    this.previousElementSibling.textContent = Number(this.previousElementSibling.textContent) + 1;
}

function productDec(env) {
    if (Number(this.nextElementSibling.textContent) > 1) {
        this.nextElementSibling.textContent = Number(this.nextElementSibling.textContent) - 1;

    }

}

function productAdd(env) {

    const cart = document.body.querySelector('.cart__products');
    let isCart = false;
    
    const product = this.closest('.product');
    const product_id = product.dataset.id;
    const product_quantity = product.querySelector('.product__quantity-value').textContent;

    Array.from(cart.querySelectorAll('.cart__product')).forEach( cartProduct => {
        if (cartProduct.dataset.id === product_id) {
            cartProduct.querySelector('.cart__product-count').textContent = 
                Number(cartProduct.querySelector('.cart__product-count').textContent) + Number(product_quantity);
            isCart = true;    
        } 

    })

    if(isCart) return;
    
    const product_image = product.querySelector('.product__image').src;
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', product_id);
    
    cartProduct.innerHTML = `<img class="cart__product-image" src=${product_image}>
                      <div class="cart__product-count">${product_quantity}</div>
                      <div class="cart__product-delete">X</div>`;
    
    cartProduct.addEventListener('click', productRemove);                  

    cart.append(cartProduct);
    
    document.body.querySelector('.cart').style['display'] = 'block';

    true;

}

function productRemove(env) {
    const cart = document.body.querySelector('.cart__products');
    cart.removeChild(this.closest('.cart__product'));
    isEmpty();
}

function isEmpty(env) {
    const cart = document.body.querySelector('.cart__products');
    if(cart.textContent.trim()) {
        document.body.querySelector('.cart').style['display'] = 'block';
    }
    else {
        document.body.querySelector('.cart').style['display'] = 'none';
    }
}