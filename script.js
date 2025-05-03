const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
})
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
})
}
      
              document.querySelector('.Addtocart').addEventListener('click', () => {
                  alert("Added to cart!");
                 
                });
              
                
                const addToCartBtn = document.querySelector('.Addtocart');
                    addToCartBtn.addEventListener('click', () => {
                  const name = document.querySelector('.data-name').innerText;
                  const price = document.querySelector('.data-price').innerText;
                  const image = document.querySelector('.singleimage img').src;
                    const product = {
                    name,
                    price,
                    image
                  };
              let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.href = 'cart.html';
                });
             

