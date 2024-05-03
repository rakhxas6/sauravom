const hamEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav-menu");

hamEl.addEventListener("click", () => {
  hamEl.classList.toggle("active");
  navEl.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamEl.classList.remove("active");
    navEl.classList.remove("active");
  })
);

// home page button
function openPage() {
  window.location.href = "product.html"; // URL of the page to open
}

function openProductPage(productId) {
  // Example URL structure: /product/productId
  const productPageUrl = `/single-product.html?product=${productId}`;
  // Redirect to the specific product page
  window.location.href = productPageUrl;
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;
// console.log(valueDisplays.)

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  // console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const productId = getQueryParameter("product");
const productDetailsDiv = document.getElementById("product-details");
const relatedProductsDiv = document.getElementById("related-products");

if (productId === "product1") {
  productDetailsDiv.innerHTML = `
         <div class="col-4" style="margin-left:50px ; margin-top:20px;
         margin-bottom:10px;">
          <img
            src="https://kumaroilmill.com.np/wp-content/uploads/2023/08/b570fbb9-b710-415d-b620-8a7a8f7cb51d-600x800.jpeg"
          />
          <h4 style="margin: 10px 0">Pure Mustard Oil 1L</h4>
          <div class="price" style="margin: 10px 0">
            <p class="line-through">RS.350.00</p>
            <p>RS.300.00</p>
          </div>
          <div class="desc" >
            <p class="text" style=" max-width: 400px;">
              Mustard oil is reddish-brown or amber in colour and is known for
              its strong smell and pungent sharp flavour. The pungency of
              mustard oil is due to the presence of allyl isothiocyanate. This
              fatty vegetable oil is obtained by pressing mustard seeds.
            </p>
            <p class="addtional" style="margin-top: 10px; margin-bottom: 10px">
              <span style="margin-right: 10px; font-weight: bold">Weight :</span
              ><span style="font-style: italic"> 1kg</span>
            </p>
            <span class="stock" style="font-size: 0.9rem; color: gray">
              46 in Stock</span
            >
          </div>
          <div class="btns" style="margin-top: 10px">
            <input type="number" value="1" style="width: 40px; height: 30px" />
            <button
              class="cta"
              style="width: 90px; margin-left: 5px; height: 30px"
            >
              Add to Cart
            </button>
          </div>
        </div>
      `;

  relatedProductsDiv.innerHTML = `
   <h3 style="margin-left:60px;  font-size:30px;">Related Products</h3>
       <div class="col-4" style="margin-left:50px;">
          <img onclick="openProductPage('product2')"
            src="https://kumaroilmill.com.np/wp-content/uploads/2023/08/Untitled-design-600x600.jpg"
          />
          <h4>Pure Mustard Oil 1L</h4>
          <div class="price">
            <p class="line-through">RS.2050.00</p>
            <p>RS.1800.00</p>
          </div>
        </div>
      `;
} else if (productId === "product2") {
  productDetailsDiv.innerHTML = `
        <div class="col-4" style="margin-left:50px ; margin-top:20px;">
          <img
            src="https://kumaroilmill.com.np/wp-content/uploads/2023/08/Untitled-design-600x600.jpg"
          />
          <h4 style="margin: 10px 0">Pure Mustard Oil 5L</h4>
          <div class="price" style="margin: 10px 0">
            <p class="line-through">RS.2050.00</p>
            <p>RS.1800.00</p>
          </div>
          <div class="desc" >
            <p class="text" style=" max-width: 400px;">
              Mustard oil is reddish-brown or amber in colour and is known for
              its strong smell and pungent sharp flavour. The pungency of
              mustard oil is due to the presence of allyl isothiocyanate. This
              fatty vegetable oil is obtained by pressing mustard seeds.
            </p>
            <p class="addtional" style="margin-top: 10px; margin-bottom: 10px">
              <span style="margin-right: 10px; font-weight: bold">Weight :</span
              ><span style="font-style: italic"> 1kg</span>
            </p>
            <span class="stock" style="font-size: 0.9rem; color: gray">
              46 in Stock</span
            >
          </div>
          <div class="btns" style="margin-top: 10px">
            <input type="number" value="1" style="width: 40px; height: 30px" />
            <button
              class="cta"
              style="width: 90px; margin-left: 5px; height: 30px"
            >
              Add to Cart
            </button>
          </div>
        </div>
      `;

  relatedProductsDiv.innerHTML = `
        <h3 style="margin-left:60px; font-size:30px; margin-top:20px;">Related Products</h3>
         <div class="col-4" style="margin-left:50px;">
          <img onclick="openProductPage('product1')"
            src="https://kumaroilmill.com.np/wp-content/uploads/2023/08/b570fbb9-b710-415d-b620-8a7a8f7cb51d-600x800.jpeg"
          />
          <h4 class="product-name">Pure Mustard Oil 1L</h4>
          <div class="price">
            <p class="line-through">RS.350.00</p>
            <p>RS.300.00</p>
          </div>
        </div>
      `;
} else {
  productDetailsDiv.innerHTML = `<p>Product not found.</p>`;
}
