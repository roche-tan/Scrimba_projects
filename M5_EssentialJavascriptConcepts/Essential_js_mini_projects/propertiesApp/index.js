import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
  return  propertyArr
    .map((property) => {
      const { image, propertyLocation, priceGBP, comment, roomsM2 } = property;
      const totalSize = roomsM2.reduce((total, size) => total + size, 0);
      return `
        <section class="card">
            <img src="images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>${priceGBP} GBP</h3>
                <p>${comment}</p>
                <h3>${totalSize}m&sup2;</h3>
            </div>
        </section> 
    `;
    })
    .join("");
}

document.getElementById("container").innerHTML =
  getPropertyHtml(propertyForSaleArr);
