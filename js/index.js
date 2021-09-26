import products from "./data/products.js";

const productsContainer = document.querySelector(".products-container");
const error = document.querySelector(".error");
const search = document.querySelector(".search");

let productsToRender = products;

function renderProducts() {
  productsContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    productsContainer.innerHTML += `<div class="products">
                                        <h4>${product.title}</h4>
                                        <p>${product.price}</p>
                                    </div>`;
  });
}

renderProducts();

search.onkeyup = function (event) {
  // console.log(event);

  const searchValue = event.target.value;

  const filteredProducts = products.filter(function (product) {
    if (product.price <= searchValue) {
      return true;
    } else {
      error.innerHTML = "";
      error.innerHTML = `<p>error</p>`;
    }
  });

  console.log(filteredProducts);

  productsToRender = filteredProducts;

  renderProducts();
};
