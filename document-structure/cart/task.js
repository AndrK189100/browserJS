
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
    const product_image = product.querySelector('.product__image').src;

    Array.from(cart.querySelectorAll('.cart__product')).forEach( cartProduct => {
        if (cartProduct.dataset.id === product_id) {
            productMove(product, product_image, cartProduct);
            cartProduct.querySelector('.cart__product-count').textContent = 
                Number(cartProduct.querySelector('.cart__product-count').textContent) + Number(product_quantity);
            isCart = true;    
        } 

    })

    if(isCart) return;
    
    
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', product_id);
    
    cartProduct.innerHTML = `<img class="cart__product-image" src=${product_image}>
                      <div class="cart__product-count">${product_quantity}</div>
                      <div class="cart__product-delete">X</div>`;
    
    cartProduct.querySelector('.cart__product-delete').addEventListener('click', productRemove);                  

    cart.append(cartProduct);

    document.body.querySelector('.cart').style['display'] = 'block';

    productMove(product, product_image, cartProduct);

}

function productMove(product, product_image, cartProduct) {
    
    const coordinateProduct = product.querySelector('.product__image').getBoundingClientRect();
    const coordinateCartProduct = cartProduct.getBoundingClientRect();

    const yWay = coordinateProduct.top -coordinateCartProduct.top;
    const xWay = coordinateCartProduct.left;
    const yStep = yWay / 20;
    const xStep = xWay / 20;

    const img = document.createElement('div');
    img.classList.add('product-move');
    img.innerHTML = `<img class="cart__product-image" src=${product_image}>`;
    img.style['top'] = coordinateProduct.top + 'px';
    img.style['left'] = coordinateProduct.left + 'px';

    let imgY = coordinateProduct.top;
    let imgX = coordinateProduct.left

    document.body.appendChild(img);
    
    const timer = ms => new Promise(res => setTimeout(res, ms))
    
    async function f() {
    for(let i = 0; i < 20; i++) {
    
        imgY -= yStep;
        imgX +=xStep;

        img.style['top'] = imgY + 'px';
        img.style['left'] = imgX + 'px';
        await timer(1);
    }
    
    img.style['display'] = 'none';
    cartProduct.style['visibility'] = 'visible';
    }
    
    f();
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