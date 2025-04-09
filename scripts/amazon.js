async function api() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const grid = document.querySelector(".products-grid");

  products.map((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
             ${product.title}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-45.png"
              alt="${product.rating.rate}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            S${product.price}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-product"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
          `;
    grid.appendChild(card);
  });
  document.querySelectorAll(".js-add-to-product").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const cart = [];
      let matchitem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchitem = item;
        }
      });

      if (matchitem) {
        matchitem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }

      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity
      })

      document.querySelector(".js-cart-quantity").textContent = cartQuantity;
      console.log(cartQuantity);
      console.log(cart);

    });
  });
}
api()
