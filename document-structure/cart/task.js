
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
    const product = this.closest('.product');
    const product_quantity = product.querySelector('.product__quantity-value').textContent;
    const product_image = product.querySelector('.product__image').src;

    let productInCart = Array.from(cart.querySelectorAll('.cart__product')).find(item => item.dataset.id === product.dataset.id);
    
    if (productInCart) {
        productMove(product, product_image, productInCart);
        productInCart.querySelector('.cart__product-count').textContent = 
                Number(productInCart.querySelector('.cart__product-count').textContent) + Number(product_quantity);
    }
    else {
            
    productInCart = document.createElement('div');
    productInCart.classList.add('cart__product');
    productInCart.setAttribute('data-id', product.dataset.id);
    
    productInCart.innerHTML = `<img class="cart__product-image" src=${product_image}>
                      <div class="cart__product-count">${product_quantity}</div>
                      <div class="cart__product-delete">X</div>`;
    
    productInCart.querySelector('.cart__product-delete').addEventListener('click', productRemove);                  

    cart.append(productInCart);

    document.body.querySelector('.cart').style['display'] = 'block';

    productMove(product, product_image, productInCart);}
}

function productMove(product, product_image, productInCart) {
    
    const coordinateProduct = product.querySelector('.product__image').getBoundingClientRect();
    const coordinateproductInCart = productInCart.getBoundingClientRect();

    const yWay = coordinateProduct.top -coordinateproductInCart.top;
    const xWay = coordinateproductInCart.left;
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
    
    const timer = ms => new Promise(res => setTimeout(res, ms));
    
    (async () => {
        for(let i = 0; i < 20; i++) {
        
            imgY -= yStep;
            imgX +=xStep;

            img.style['top'] = imgY + 'px';
            img.style['left'] = imgX + 'px';
            await timer(1);
        }
        
        img.style['display'] = 'none';
        productInCart.style['visibility'] = 'visible';
    })();
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